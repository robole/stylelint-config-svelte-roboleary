module.exports = {
  extends: ["stylelint-config-html", "stylelint-config-roboleary"],
  overrides: [{ files: ["**/*.svelte"], customSyntax: "svelte" }],
};
