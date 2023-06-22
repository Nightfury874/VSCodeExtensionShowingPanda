// webview.js
panel.webview.onDidReceiveMessage((message) => {
    switch (message.type) {
        case 'embedCode':
            const embedCode = message.data;
            // Process the embed code and take necessary actions in your extension
            break;
    }
});
