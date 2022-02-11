import React from "react";
import {render} from "react-dom";
import {Content} from "./Components/content";

var _window;
var _selectedRow;

chrome.devtools.panels.create(
  "Podio Integration",
  null,
  "panel.html",
  function (panel) {
    // code invoked on panel creation
    panel.onShown.addListener(function (panelWindow) {
      _window = panelWindow;
      _selectedRow = null;
    });
  }
);

chrome.devtools.network.onRequestFinished.addListener(function (request) {
  // intercept successful integration service requests
  if (
    request.request.url.includes("integrationservice") &&
    request.response.status === 200 &&
    request.request.method === "POST" &&
    request.request.bodySize > 0
  ) {
    // podio-integration check
    if (
      request.request.postData &&
      request.request.postData.text &&
      request.request.postData.text.includes("podio")
    ) {
      request.getContent((body) => {
        var bodyObj = JSON.parse(body);
        var podioRespStatus = bodyObj.status;
        var podioRespBody = JSON.parse(bodyObj.response);
        addRow(request.request, podioRespStatus, podioRespBody);
      });

      chrome.devtools.inspectedWindow.eval(
        'console.log("podio-integration request url: " + unescape("' +
          escape(request.request.url) +
          '"))'
      );
    }
  }
});

function addRow(request, status, body) {
  var table = _window.document.getElementById("responses");
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = request.url;
  cell2.innerHTML = status;
  addRowClickHandler(row, body);
}

function addRowClickHandler(row, json) {
  var contentTree = _window.document.getElementById("json-view");

  var createClickHandler = function () {
    return function () {
      if (_selectedRow) {
        _selectedRow.classList.remove("selected");
      }
      const element = <Content json={json} />;
      render(element, contentTree);
      _selectedRow = row;
    };
  };
  row.onclick = createClickHandler();
}
