# Somewhere.com Global Hiring Calculator

A branded salary calculator for SaaS companies to compare the cost of hiring in the U.S. vs global regions like the Philippines, Latin America, and South Africa.

## Features

- **Role & Salary Input**: Enter job title and U.S. salary
- **Regional Comparisons**: See cost breakdowns for 3 key regions:
  - Philippines (20% of U.S. salary)
  - Latin America (35% of U.S. salary)  
  - South Africa (40% of U.S. salary)
- **Detailed Savings**: View local salary, savings amount, and percentage saved
- **Modern UI**: Clean, mobile-friendly design with Somewhere.com branding
- **Responsive Design**: Works seamlessly on all devices

## Tech Stack

- **React 18** - Modern UI framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Inter Font** - Professional typography

## Quick Start

### Development
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
npm run preview
```

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repo to Vercel
2. Deploy automatically on push to main branch

### Netlify
1. Run `npm run build`
2. Deploy the `dist` folder to Netlify

### Other Platforms
The built files in `dist/` can be served from any static hosting provider.

## Customization

### Branding Colors
Edit `tailwind.config.js` to modify the color palette:
```js
colors: {
  primary: '#1A70FF',    // Somewhere.com blue
  background: '#F5F6F7', // Light background
  text: '#1F2937',       // Dark text
}
```

### Regional Data
Modify the `regions` array in `src/App.jsx` to adjust:
- Salary percentages
- Region names
- Flags and descriptions

## License

MIT - Feel free to use for your own projects!