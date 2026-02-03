# Mubfilters - Node.js Application

This project has been converted to a Node.js application that serves the Mubfilters website.

## Prerequisites

Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

## Installation

1. Navigate to the project directory:
   ```bash
   cd mubfilters
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Production Mode
```bash
npm start
```

### Development Mode (with auto-restart on file changes)
```bash
npm run dev
```

The application will start on `http://localhost:3000`

## Features

- ✅ Serves all static HTML, CSS, and JavaScript files
- ✅ Handles routing for all pages (index, portfolio-details, service-details, etc.)
- ✅ Contact form endpoint (`POST /forms/contact`)
- ✅ Newsletter subscription endpoint (`POST /forms/newsletter`)
- ✅ Static asset serving (images, fonts, vendor files)
- ✅ Translation files support
- ✅ CORS enabled for API calls

## API Endpoints

### Contact Form
- **URL**: `POST /forms/contact`
- **Body**: 
  ```json
  {
    "name": "Your Name",
    "email": "your.email@example.com",
    "subject": "Subject",
    "message": "Your message"
  }
  ```

### Newsletter Subscription
- **URL**: `POST /forms/newsletter`
- **Body**: 
  ```json
  {
    "email": "your.email@example.com"
  }
  ```

## Configuration

### Email Setup
To enable email functionality, uncomment and configure the nodemailer section in `app.js`:

```javascript
const transporter = nodemailer.createTransporter({
    service: 'gmail', // or your email service
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-password'
    }
});
```

### Environment Variables
You can set the following environment variables:
- `PORT`: Server port (default: 3000)

## File Structure

```
mubfilters/
├── app.js                 # Main server file
├── package.json           # Node.js dependencies and scripts
├── index.html            # Main website page
├── assets/               # Static assets (CSS, JS, images)
├── translations/         # Translation files
├── forms/               # Original PHP forms (replaced by Node.js endpoints)
└── *.html               # Other HTML pages
```

## Troubleshooting

1. **Port already in use**: Change the port by setting the PORT environment variable:
   ```bash
   PORT=8080 npm start
   ```

2. **Module not found**: Make sure to run `npm install` first

3. **Static files not loading**: Check that the assets folder structure is intact

## Development

The server automatically serves:
- Static files from the `assets/` directory
- Translation files from the `translations/` directory
- HTML pages from the root directory

Any changes to HTML, CSS, or static files will be reflected immediately. For changes to `app.js`, restart the server or use `npm run dev` for auto-restart. 