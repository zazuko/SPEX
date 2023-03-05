# SPEX is a Progressive Web App (PWA)

## Test the PWA

Both the service worker and manifest file—critical to PWA functionality—are generated during the production build, and not fully functional in the dev environment. 

To get around this, we’ll need to build the site, then serve it.

```zsh
npm run build && npx http-server dist
```
