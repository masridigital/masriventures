# Masri Ventures

Professional website for Masri Ventures - Private Equity & Acquisitions firm.

## Technology Stack

- **Backend**: Node.js with Express.js
- **Frontend**: Vanilla JavaScript with modern CSS
- **Security**: Helmet.js, rate limiting, compression
- **Hosting**: Optimized for Cloudways Flexible Application

## Local Development

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
npm install
```

### Running Locally

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The application will be available at `http://localhost:3000`

## Cloudways Deployment

### Setting Up on Cloudways

1. **Create Application**
   - Log into Cloudways console
   - Add new application
   - Select "Custom App" or "Node.js"
   - Choose your server and provide application details

2. **Configure Application**
   - Set Node.js version to 18.x in Application Settings
   - Set the application root to `/public_html`
   - Set startup file to `server.js`

3. **Deploy Code**
   - Connect your Git repository OR
   - Use SFTP to upload files to `/public_html`

4. **Install Dependencies**
   - SSH into your server
   - Navigate to application directory
   - Run `npm install --production`

5. **Start Application**
   - Set PM2 or Node process manager
   - Configure environment variables if needed
   - Start with `npm start`

### Environment Variables

```bash
PORT=3000  # Default port (Cloudways will set this automatically)
```

### Cloudways-Specific Configuration

The application is configured for Cloudways with:

- **Health Check Endpoint**: `/health` for monitoring
- **Security Headers**: Helmet.js for secure headers
- **Compression**: Gzip compression for better performance
- **Rate Limiting**: Protection against abuse
- **Static File Serving**: Optimized for production

## Project Structure

```
masriventures/
├── server.js              # Main Express server
├── package.json           # Dependencies and scripts
├── .nvmrc                 # Node version specification
├── public/                # Static assets
│   ├── index.html         # Main HTML file
│   ├── css/
│   │   └── style.css      # Styles
│   └── js/
│       └── main.js        # Client-side JavaScript
└── README.md              # This file
```

## Features

- Responsive, mobile-first design
- Smooth scroll animations
- Contact form with API endpoint
- SEO optimized
- Fast load times with compression
- Security best practices

## Portfolio Companies

- Masri Digital Marketing
- Off The Record Events

## Contact

For inquiries, visit the website contact form or email info@masriventures.com

---

&copy; 2024 Masri Ventures. All rights reserved. Founded by Joseph Masri.
