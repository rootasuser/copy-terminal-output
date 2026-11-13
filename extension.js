const vscode = require('vscode');

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand('copyTerminalOutput.copy', async () => {
      await vscode.commands.executeCommand('workbench.action.terminal.copySelection');
      await vscode.commands.executeCommand('workbench.action.terminal.clearSelection');
      vscode.window.setStatusBarMessage('$(check) Output copied to clipboard  |  Copy Terminal Output by Windel Navales', 3500);
    }),
    vscode.commands.registerCommand('copyTerminalOutput.about', () => {
      vscode.window.showInformationMessage(
        'Copy Terminal Output v1.0.2 - Developed by Windel Navales'
      );
    })
  );
}

function deactivate() {}

module.exports = { activate, deactivate };
