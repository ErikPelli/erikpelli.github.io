# Portfolio website

Jekyll theme based on [Tailpages](https://github.com/harrywang/tailpages).

## Development

### Prerequisites
- Ruby (for Jekyll)
- Node.js (for Tailwind CSS)

### Installation
Install project dependencies:
```bash
npm install
bundle install
```

### Local Development
To work locally with live reloading for both content and CSS:

1. Open a terminal and run the CSS watcher:
```bash
npm run dev:css
```

2. Open another terminal and run the Jekyll server:
```bash
bundle exec jekyll serve
```

### Updating Requirements
If you need to update dependencies:
```bash
npm update
bundle update
```

### Manual Build
To build the project manually:
```bash
npm run build:css
bundle exec jekyll build
```
