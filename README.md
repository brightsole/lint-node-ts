# (eslint-config-)lint-node-ts

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![published on npm!](https://raw.githubusercontent.com/one19/project-status/master/cache/lint-node-ts/npm.svg?sanitize=true)](https://www.npmjs.com/package/@brightsole/eslint-config-lint-node-ts)

### What is it?
<details>
<summary>tl;dr: eslint & prettier setup for node projects</summary>
<br />

A thin wrapper around `@brightsole/lint-node` that supports `ts`

</details>
<br/>

### How to use it?
<details>
<summary>
  tl;dr: <code>yarn add -D @brightsole/eslint-config-lint-node-ts</code>
</summary>
<br />
After the install, you need to extend the eslint setup by adding an `.eslintrc` file with the following contents:

```json
  {
    "extends": "@brightsole/lint-node-ts"
  }
```

Then, all that's left is to add a script for linting, like the one in this repo:
```json
  ...
  "scripts": { "lint": "eslint . --fix" },
  ...
```

##### That's pretty much it

</details>
<br/>

### TODO:
<details>
<summary>tl;dr: <strong>not. much.</strong></summary>
<br />

1. add it to project-status
2. generate a couple badges

</details>
<br/>