# BK NOTES

Initially from parent dir:

```
npx create-next-app --example gh-pages fisebil.github.io
cd fisebil.github.io
```

Then after changes:

```
npm run deploy
```

This will push the out directory to branch gh_pages.

Change GitHub pages settings to publish branch **gh_pages**.


# gh-pages Hello World example

This example shows the most basic idea behind Next. We have 2 pages: `pages/index.js` and `pages/about.js`. The former responds to `/` requests and the latter to `/about`. Using `next/link` you can add hyperlinks between them with universal routing capabilities.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example gh-pages gh-pages-app
# or
yarn create next-app --example gh-pages gh-pages-app
# or
pnpm create next-app -- --example gh-pages gh-pages-app
```

### Deploy it to github

Edit `env-config.js` and replace `'Next-gh-page-example'` by your project name.

Edit `next.config.js` and replace `'Next-gh-page-example'` by your project name.

1.  Create repository.
2.  Link it to your github account.
3.  Publish your default branch, e.g. `main`.

```bash
npm run deploy
```

Test it:

Replace `<github-user-name>` and `<github-project-name>`

```bash
https://<github-user-name>.github.io/<github-project-name>/
```

Example:

```bash
https://github.com/thierryc/Next-gh-page-example/

https://thierryc.github.io/Next-gh-page-example/
```
