const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

function provideDefinition (document, position) {
  const fileName = document.fileName;
  const workDir = path.dirname(fileName);
  const destPath = `${workDir.split('src')[0]}src/api/request.js`;
  const word = document.getText(document.getWordRangeAtPosition(position));
  const line = document.lineAt(position).text
  const matchWord = line.indexOf(`this.$api.${word}`)
  if(matchWord > -1) {
    if (destPath) {
      let index = 0;
      const file = fs.readFileSync(destPath);
      const lineCode = file.toString('utf-8').split('\n');
      for (let i = 0; i < lineCode.length; i ++) {
        let code = lineCode[i];
        if (code.trim().startsWith(`export const ${word}`)) {
          index = i
          break;
        }
      }
      return new vscode.Location(vscode.Uri.file(destPath), new vscode.Position(index, 12));
    }
  }
}

module.exports = function (context) {
  // 注册如何实现跳转到定义，第一个参数表示仅对javascript文件生效
  context.subscriptions.push(vscode.languages.registerDefinitionProvider(['vue'], {
    provideDefinition
  }));
};