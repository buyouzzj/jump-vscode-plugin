// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
// const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('恭喜, 你的插件 "jump-vscode-plugin" 已激活!');
	require('./src/jump.js')(context);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
	console.log('您的插件已被释放！')
}

module.exports = {
	activate,
	deactivate
}
