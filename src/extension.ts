/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const provider = vscode.languages.registerCompletionItemProvider(
    { scheme: "file", language: "nexovm" },
    {
      provideCompletionItems() {
        const completions = [
          {
            label: "function",
            detail: "Snippet: Function Definition",
            kind: vscode.CompletionItemKind.Function,
          },
          {
            label: "func",
            detail: "Snippet: Function Definition",
            kind: vscode.CompletionItemKind.Function,
          },
          {
            label: "fun",
            detail: "Snippet: Function Definition",
            kind: vscode.CompletionItemKind.Function,
          },
          {
            label: "define",
            detail: "Snippet: Define Definition",
            kind: vscode.CompletionItemKind.Function,
          },
          {
            label: "def",
            detail: "Snippet: Define Definition",
            kind: vscode.CompletionItemKind.Function,
          },
          {
            label: "method",
            detail: "Snippet: Method Definition",
            kind: vscode.CompletionItemKind.Function,
          },
          {
            label: "meth",
            detail: "Snippet: Method Definition",
            kind: vscode.CompletionItemKind.Function,
          },
          {
            label: "met",
            detail: "Snippet: Method Definition",
            kind: vscode.CompletionItemKind.Function,
          },
          {
            label: "cout",
            detail: "Snippet: Cout Definition",
            kind: vscode.CompletionItemKind.Event,
          },
          {
            label: "sout",
            detail: "Snippet: Sout Definition",
            kind: vscode.CompletionItemKind.Event,
          },
          {
            label: "sysout",
            detail: "Snippet: Sysout Definition",
            kind: vscode.CompletionItemKind.Event,
          },
          {
            label: "log",
            detail: "Snippet: Log Definition",
            kind: vscode.CompletionItemKind.Event,
          },
          {
            label: "print",
            detail: "Snippet: Print Definition",
            kind: vscode.CompletionItemKind.Event,
          },
          {
            label: "call",
            detail: "Snippet: Call Definition",
            kind: vscode.CompletionItemKind.Struct,
          },
        ];

        return completions.map((item) => {
          const completionItem = new vscode.CompletionItem(
            item.label,
            item.kind
          );
          completionItem.detail = item.detail;
          return completionItem;
        });
      },
    },
    "."
  );

  context.subscriptions.push(provider);
}
