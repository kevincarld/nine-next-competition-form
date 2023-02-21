This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

- Check and update config file /next.config.js

Running dev server:

```bash
# install dependencies
yarn
# start local dev
yarn dev
```
## Setting up meta

- Check and update config file /next.config.js
- App Icons are being called in _document.js
- App meta are being called in _app.js
- Upload local fonts in public/fonts and configure within theme/components/GlobalCss.js

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Important commands
```bash
# export
yarn export
```
Static will be exported to /out or check package json for export script (next export -o samplefoldername)