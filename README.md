# Installation

See https://docusaurus.io/docs/installation

```zsh
npx create-docusaurus@latest fisebil.github.io classic
```

# Deployment

See https://docusaurus.io/docs/deployment for deploying to GitHub Pages (and other hosting providers).

Building with **yarn** caused problems in GitHub Actions, so I switched to use of **npm** instead.
* Changed `.github/workflows/deploy.yml` and `test-deploy.yml` file to use npm according to the documentation.
* Also removed all yarn artefacts from git.


Yarn is still useful for building the website and pushing to the `gh-pages` branch (when **Deploy from a branch** is being used instead of **GitHub Actions**).

```zsh
corepack enable
yarn install
$ GIT_USER=<GitHub username> yarn deploy
```
