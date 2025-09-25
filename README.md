# filippovicentini.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/57999461-2350-4da3-8788-ca4e0e6dcb30/deploy-status)](https://app.netlify.com/sites/filippovicentini.com/deploys)

Source code for [filippovicentini.com](https://filippovicentini.com), my personal website, built with [Eleventy](https://www.11ty.io).

## Development

### Prerequisites
- Node.js 22+ (configured in netlify.toml)

### Setup
```bash
npm install
```

### Development server
```bash
npm run dev
```
This will start the development server at http://localhost:8080/

### Production build
```bash
npm run build
```
This builds the site to the `dist/` directory and includes service worker generation.