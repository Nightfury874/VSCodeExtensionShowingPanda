// webview.js
panel.webview.onDidReceiveMessage((message) => {
    switch (message.type) {
        case 'embedCode':
            const embedCode = message.data;
            processEmbedCode(embedCode);
            break;
    }
});

function processEmbedCode(embedCode) {
    // Here, you can perform any necessary actions with the embed code
    // For example, you can insert the embed code into the sidebar or execute it

    // Inserting the embed code into the sidebar's HTML
    const sidebarElement = document.getElementById('sidebar');
    sidebarElement.innerHTML = embedCode;

    // Alternatively, you can execute the embed code directly
    // eval(embedCode);

    // Perform any additional actions based on the embed code
    // For example, you can manipulate the DOM or interact with other parts of your extension
}
