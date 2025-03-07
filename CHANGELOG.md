# @zazuko/spex

## 0.2.2

### Patch Changes

- add8c3c: Set `vite` as a dev dependency

## 0.2.1

### Patch Changes

- 946b0d1: Replace `process.env` in final builds, to prevent the app to crash.

## 0.2.0

### Minor Changes

- a677a4f: Built with vite. Some built paths changed

  | Before             | Now                 |
  | ------------------ | ------------------- |
  | `dist/spex.umd.js` | `dist/spex.umd.cjs` |
  | `dist/spex.css`    | `dist/style.css`    |

### Patch Changes

- 3f39b8e: Many dependency updates. Notably:

  - `rdf-ext` replaced with `@zazuko/env`
  - `@rdfjs/formats-common` replaced with `@rdfjs/formats`
  - `@zazuko/rdf-vocabularies` replaced with `@zazuko/prefixes`
  - updated `sparql-http-client` to v3
  - `rdf-js` removed

## 0.1.20

### Patch Changes

- 28f822c: Use click event to update view
