---
title: Finding Unused and Missing Dependencies
date: 2020-12-31 15:30:00
tags: ['javascript','npm','dependencies']
---

Having unused dependencies in your project can lead to increased installation time and bloat. It also means you need to keep an eye on more packages to ensure they stay up to date to prevent any security vulnerabilities.

To check which dependencies we're not using or missing, we can use the [depcheck](https://github.com/depcheck/depcheck) package like so:

```sh
$ npx depcheck
```

Which will produce output similar to the following:

```txt
Unused devDependencies
* @size-limit/preset-small-lib
* @storybook/addon-essentials
* @storybook/addon-info
* @storybook/addon-links
* @storybook/addons
* @testing-library/jest-dom
* @types/react-dom
* babel-loader
* react-is
* tslib
* typescript
```

Some of these might genuinely be needed, so make sure any existing functionality doesn't break upon removing them. 

If you need to manually tell depcheck to ignore packages you know you need, you can do so by creating a `.depcheckrc` file at the root of your project with the following content:

```txt
ignores: ["react-is", "babel-*"]
skip-missing: true
```

### Piping to JSON

You can also pass a `--json` flag to the `depcheck` command to output the results in JSON format. You can then pipe this through a few other tools to get some pretty formatting from your terminal, for example:

```sh
$ npx depcheck --json | npx json | bat
```

Where `npx json` is a command run to prettify the JSON, and `bat` is an alternative to cat, for printing to your terminal.

---

Full documentation can be found on depcheck's GitHub repository found [here](https://github.com/depcheck/depcheck#readme)
