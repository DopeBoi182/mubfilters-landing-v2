const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 62542;

// Middleware
// Force no-cache for all responses to always serve fresh content
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    res.set('Surrogate-Control', 'no-store');
    next();
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from assets directory with strict no-cache headers
app.use('/assets', express.static(path.join(__dirname, 'assets'), {
    setHeaders: (res) => {
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
        res.setHeader('Surrogate-Control', 'no-store');
    }
}));

// Serve translation files with strict no-cache headers
app.use('/translations', express.static(path.join(__dirname, 'translations'), {
    setHeaders: (res) => {
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
        res.setHeader('Surrogate-Control', 'no-store');
    }
}));

// Serve main pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/portfolio-details', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio-details.html'));
});

app.get('/service-details', (req, res) => {
    res.sendFile(path.join(__dirname, 'service-details.html'));
});

app.get('/starter-page', (req, res) => {
    res.sendFile(path.join(__dirname, 'starter-page.html'));
});

// Handle contact form submission (replaces contact.php)
app.post('/forms/contact', async(req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all required fields'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please enter a valid email address'
            });
        }

        // Log the contact form submission (you can replace this with actual email sending)
        console.log('Contact form submission:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Message:', message);

        // TODO: Configure nodemailer with your email settings
        // const transporter = nodemailer.createTransporter({
        //     service: 'gmail',
        //     auth: {
        //         user: 'your-email@gmail.com',
        //         pass: 'your-password'
        //     }
        // });

        res.json({
            success: true,
            message: 'Your message has been sent successfully!'
        });

    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({
            success: false,
            message: 'There was an error sending your message. Please try again later.'
        });
    }
});

// Handle newsletter subscription (replaces newsletter.php)
app.post('/forms/newsletter', (req, res) => {
    try {
        const { email } = req.body;

        // Basic validation
        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Please enter your email address'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please enter a valid email address'
            });
        }

        // Log the newsletter subscription (you can replace this with actual database storage)
        console.log('Newsletter subscription:', email);

        res.json({
            success: true,
            message: 'Thank you for subscribing to our newsletter!'
        });

    } catch (error) {
        console.error('Newsletter subscription error:', error);
        res.status(500).json({
            success: false,
            message: 'There was an error processing your subscription. Please try again later.'
        });
    }
});

// Catch all other routes and serve 404
app.get('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Mubfilters server is running on http://localhost:${PORT}`);
    console.log(`📁 Serving static files from: ${__dirname}`);
    console.log(`📧 Contact form endpoint: http://localhost:${PORT}/forms/contact`);
    console.log(`📰 Newsletter endpoint: http://localhost:${PORT}/forms/newsletter`);
});

module.exports = app;