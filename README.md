# stylelint-config-svelte-roboleary

My stylelint config for linting svelte files. Works with v14+.

It extends [stylelint-config-html](https://www.npmjs.com/package/stylelint-config-html) to make svelte files parseable, and my own default config [stylelint-config-roboleary](https://www.npmjs.com/package/stylelint-config-roboleary).

This can be used along side Prettier (which is used by the VS Code Svelte extension), all conflicting rules are disabled.

## Usage

1. Install this package along with *stylelint* `npm install -D stylelint-config-svelte-roboleary` as *devDependencies*.
1. Create a stylelint config in your project directory e.g. *.stylelintrc*. Add the following to the file:

	```json
    {
      "extends": ["stylelint-config-svelte-roboleary"]
    }
	```

1. You can add scripts to your _package.json_ to lint and fix your code from the command-line:

   ```json
   {
        "scripts": {
          "lint": "npx stylelint **/*.svelte",
          "lint:fix": "npm run style-lint -- --fix",
        }
   }
   ```

1. Additionally, there are [integrations for code editors](https://stylelint.io/user-guide/integrations/editor). I use the [stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) for VS Code.

## Configuration in VS Code

If you want to use stylelint and Prettier in VS Code, I recommend installing these 3 extensions: [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), and [Format Code Action](https://marketplace.visualstudio.com/items?itemName=rohit-gohri.format-code-action&ssr=false#review-details) to enable Prettier to be run as a code action.

To format and lint CSS/SCSS code on save, you can update your user settings with the following:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": [
    "source.formatDocument",
    "source.fixAll"
  ],
}
```

## Show gratitude

If this helped you, please star the repo to help others find it. 🌟

You can [make a donation](https://ko-fi.com/roboleary) to enable me to make more great open-source software and tutorials. 🙏
