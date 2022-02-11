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

## Build and install  

### Clone repository

```sh
git clone https://github.com/bettydi/chrome-extension-podio-integration.git
```

### Install dependencies
```sh
cd chrome-extension-podio-integration
yarn
```

### Webpack build 
Webpack will generate the `dist` folder in the root of the project directory. 

```sh
yarn run dev
```

### Loading the extension
- Open `chrome://extensions`
- Toggle  `Developer mode` on 
- Click `Load unpacked` and select the `dist` folder

## Permissions
- storage: allows use of Storage API
- activeTab: allow the extension temporary access to the current page
- scripting: allows use of the Scripting API's `executeScript` method
- clipboardWrite: allows writing to clipboard

## References

- [Chrome Extension documentation](https://developer.chrome.com/docs/extensions/reference)
- [Getting Started Tutorial - ~1hr](https://developer.chrome.com/docs/extensions/mv3/getstarted/)
- [DevTools API](https://developer.chrome.com/docs/extensions/mv3/devtools/)
- [Sample Code - extensions](https://github.com/GoogleChrome/chrome-extensions-samples)
- [Sample Code - devtools](https://github.com/GoogleChrome/devtools-samples)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/google-chrome-extension)
- [Available Capabilities](https://developer.chrome.com/docs/extensions/mv3/faq/#capabilities2)
- [Message Passing](https://developer.chrome.com/docs/extensions/mv3/messaging#external)
