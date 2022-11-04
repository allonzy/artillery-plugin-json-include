# artillery-plugin-json-include

This is a small artillery.io plugin that allow to load json from files during tests

The custom instruction is "!include($fileName)" in json field
```yaml
config:
  plugins:
    json-include: {}
scenarios:
  - flow:
      - post:
          url: "/route"
          json: "!include(relativePath.json)"
```
### Source code
https://github.com/allonzy/artillery-plugin-json-include
