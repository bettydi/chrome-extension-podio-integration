import React from "react";
import ReactJson from "react-json-view";

export function Content(props) {
  return (
    <ReactJson
      src={props.json}
      theme="rjv-default"
      name={null}
      enableClipboard={false}
      displayDataTypes={false}
    />
  );
}
