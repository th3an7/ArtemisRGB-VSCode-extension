// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "artemisrgb" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('artemisrgb.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from ArtemisRGB!');
	});

	vscode.debug.onDidStartDebugSession(() => {
		console.log("Debug Session Started!");
	});

	vscode.debug.onDidTerminateDebugSession(() => {
		console.log("Debug Session Ended!");
	});

	vscode.debug.onDidChangeBreakpoints(() => {
		vscode.debug.breakpoints.forEach((breakpoint) => {
			console.log(breakpoint.id + " - " + breakpoint.enabled);
		});
	});

	vscode.window.onDidOpenTerminal(() => {
		console.log("Terminal Opened!");
	});

	vscode.window.onDidCloseTerminal(() => {
		console.log("Terminal Closed!");
	});

	vscode.window.onDidChangeTerminalState(() => {
		console.log("Terminal State Changed!");
		vscode.window.terminals.forEach((terminal) => {
			console.log("Name: " + terminal.name);
			console.log("State: " + terminal.state.isInteractedWith);
		});
	});

	vscode.window.onDidChangeVisibleTextEditors(() => {
		console.log("Editor State Changed!");
		console.log(vscode.window.activeTextEditor?.document.languageId);
		console.log(vscode.window.activeTextEditor?.document.fileName);
	});

	vscode.tasks.onDidEndTask(() => {
		console.log("Task Ended!");
	});

	vscode.tasks.onDidEndTaskProcess(() => {
		console.log("Task Process Ended!");
	});

	vscode.tasks.onDidStartTask(() => {
		console.log("Task Started!");
	});

	vscode.tasks.onDidStartTaskProcess(() => {
		console.log("Task Process Started!");
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
