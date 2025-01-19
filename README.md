# Nexovm Language Support

Dies ist eine Erweiterung für Visual Studio Code, die Syntax-Hervorhebung und Unterstützung für die Programmiersprache Nexovm bietet.

## Funktionen:

- Syntaxhervorhebung für Funktionen (`fun`, `define`, `call`, `cout`).
- Anpassbare Farbschemata.
- Unterstützung für benutzerdefinierte Variablen- und Funktionsnamen.

## Installation:

1. Installiere die Erweiterung über den VSCode Marketplace oder lade die `.vsix`-Datei herunter und installiere sie manuell.

## Beispielcode:

```nexovm
fun main {
    string testString = "Test String"
    cout >!> *testString
    call testFunction
}

define testFunction {
    cout >> "Hello from testFunction!"
}
```
