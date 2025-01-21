# Nexoscript Language Support

This is a visual studio code extension to improve the handling with the programming language nexoscript with syntax highlighting and completion.

## Functionallity

- Syntax highlighting for example `fun`, `define`, `call` and `cout`.
- You can make custom themes.

## Installation

1. Just download the `.vsix` file from the latest release.
2. Open visual studio code.
3. Go to extensions.
4. Click on the three dots.
5. Click on 'Install from VSIX'.
6. Select the downloaded `.vsix` file.

## Examples

```nexoscript
fun main {
    string testString = "Test String"
    cout >!> *testString
    call testFunction
}

define testFunction {
    cout >> "Hello from testFunction!"
}
```
