# Liza Katz Personal Website

A personal portfolio and blog website built with Gatsby, showcasing AI/ML expertise, projects, and blog posts.

## Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Running Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev
# or
gatsby develop

# The site will be available at http://localhost:8000
```

### Build for Production
```bash
# Create production build
npm run build
# or
gatsby build

# Serve production build locally (optional)
npm run serve
# or
gatsby serve
```

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment
```bash
# Build and deploy to GitHub Pages
npm run deploy
# or
gatsby build && gh-pages -d public
```

### GitHub Pages Setup
- The site is served from the `gh-pages` branch
- Custom domain configured via CNAME
- Automatic deployment via GitHub Actions (if configured)

## Content Management

- **Blog posts**: Add markdown files to `content/blog/`
- **Site configuration**: Edit `gatsby-config.js`
- **Styling**: Uses Tailwind CSS

## Based on Devfolio

Powered by [@Devfolio](https://github.com/RyanFitzgerald/devfolio)

## License

Licensed under the [MIT License](https://github.com/RyanFitzgerald/devfolio/blob/master/LICENSE.md).
