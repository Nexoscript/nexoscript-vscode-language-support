/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const provider = vscode.languages.registerCompletionItemProvider(
    { scheme: "file", language: "nexoscript" },
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
          {
            label: "use",
            detail: "Snippet: Call Definition",
            kind: vscode.CompletionItemKind.Struct,
          },
          {
            label: "string",
            detail: "Snippet: String Definition",
            kind: vscode.CompletionItemKind.Property,
          },
          {
            label: "integer",
            detail: "Snippet: Integer Definition",
            kind: vscode.CompletionItemKind.Property,
          },
          {
            label: "int",
            detail: "Snippet: Integer Definition",
            kind: vscode.CompletionItemKind.Property,
          },
          {
            label: "long",
            detail: "Snippet: Long Definition",
            kind: vscode.CompletionItemKind.Property,
          },
          {
            label: "double",
            detail: "Snippet: Double Definition",
            kind: vscode.CompletionItemKind.Property,
          },
          {
            label: "float",
            detail: "Snippet: Float Definition",
            kind: vscode.CompletionItemKind.Property,
          },
          {
            label: "boolean",
            detail: "Snippet: Boolean Definition",
            kind: vscode.CompletionItemKind.Property,
          },
          {
            label: "bool",
            detail: "Snippet: Boolean Definition",
            kind: vscode.CompletionItemKind.Property,
          },
          {
            label: "array[]",
            detail: "Snippet: Array Definition",
            kind: vscode.CompletionItemKind.Property,
          },
          {
            label: "object",
            detail: "Snippet: Any Definition",
            kind: vscode.CompletionItemKind.Property,
          },
          {
            label: "obj",
            detail: "Snippet: Any Definition",
            kind: vscode.CompletionItemKind.Property,
          },
          {
            label: "any",
            detail: "Snippet: Any Definition",
            kind: vscode.CompletionItemKind.Property,
          },
          {
            label: ">>",
            detail: "Snippet: >> Definition",
            kind: vscode.CompletionItemKind.Field,
          },
          {
            label: ">!>",
            detail: "Snippet: >!> Definition",
            kind: vscode.CompletionItemKind.Field,
          },
          {
            label: "<<",
            detail: "Snippet: << Definition",
            kind: vscode.CompletionItemKind.Field,
          },
          {
            label: "<+<",
            detail: "Snippet: <+< Definition",
            kind: vscode.CompletionItemKind.Field,
          },
          {
            label: "<-<",
            detail: "Snippet: <-< Definition",
            kind: vscode.CompletionItemKind.Field,
          },
          {
            label: "<*<",
            detail: "Snippet: <*< Definition",
            kind: vscode.CompletionItemKind.Field,
          },
          {
            label: "</<",
            detail: "Snippet: </< Definition",
            kind: vscode.CompletionItemKind.Field,
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
