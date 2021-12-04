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

The [Svelte for VS Code extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) uses Prettier under the hood for code formatting. This config ensures that stylelint rules and Prettier's default rules don't interfere when formatting the code.

I find it better to run linting and formatting as code actions. This way it is possible to run linting and formatting as a series of actions: lint first, then format.

I have installed 3 extensions for linting CSS and formatting code on any project:

- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint),
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), and
- [Format Code Action](https://marketplace.visualstudio.com/items?itemName=rohit-gohri.format-code-action&ssr=false#review-details).

To lint and format your svelte code on save, you can update your user settings with the following:

```json
{
  "editor.formatOnSave": false,
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "stylelint.validate": ["css", "less", "postcss", "svelte", "vue"],
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": ["source.formatDocument", "source.fixAll"],
  "[svelte]": {
    "editor.defaultFormatter": "svelte.svelte-vscode"
  },
}
```

We disable VS Code's builtin formatting for CSS-like syntaxes here too (`css.validate`). From v14+ of stylelint, we must explicitly declare what languages we want stylelint to lint via `stylelint.validate`.

You can try out this project which has stylelint set-up correctly to test your configuration: [https://github.com/robole/svelte-todo-with-tests](https://github.com/robole/svelte-todo-with-tests).

## Show gratitude

If this helped you, please star the repo to help others find it. 🌟

You can [make a donation](https://ko-fi.com/roboleary) to enable me to make more great open-source software and tutorials. 🙏
