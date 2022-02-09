# Podio Integration DevTools
A Chrome Extension that adds a panel to DevTools to inspect Podio Integration traffic. 

It listens for completed requests to Podio integration service, unpacks the response content, unescapes it and displays the formatted JSON. 

example integration response:
```
{"status":200,"response":"{\"filtered\":370,\"total\":370,\"items\":[...]}"}
```

formatted json:
```
{
  "filtered": 370,
  "total": 370,
  "items": [...]
}
```

## Loading 
See the Getting Started tutorial for instructions how to load an unpacked extension in Developer mode.

https://developer.chrome.com/docs/extensions/mv3/getstarted/

## Permissions
- storage: allows use of Storage API
- activeTab: allow the extension temporary access to the current page
- scripting: allows use of the Scripting API's `executeScript` method

## References

### Docs
https://developer.chrome.com/docs/extensions/reference

### Getting Started Tutorial (~1hr) 
https://developer.chrome.com/docs/extensions/mv3/getstarted/

### DevTools API
https://developer.chrome.com/docs/extensions/mv3/devtools/

### Sample Code
https://github.com/GoogleChrome/chrome-extensions-samples
https://github.com/GoogleChrome/devtools-samples

### Stack Overflow
https://stackoverflow.com/questions/tagged/google-chrome-extension

### Available Capabilities
https://developer.chrome.com/docs/extensions/mv3/faq/#capabilities2

### Message Passing 
https://developer.chrome.com/docs/extensions/mv3/messaging#external