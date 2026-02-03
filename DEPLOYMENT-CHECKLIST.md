# 🚀 SEO Deployment Checklist - Mubfilters

## Pre-Deployment Checklist

### ✅ Files to Upload
- [ ] `index.html` (modified with SEO optimizations)
- [ ] `robots.txt` (new file)
- [ ] `sitemap.xml` (new file)
- [ ] `.htaccess` (new file - if using Apache/Passenger)

### ✅ Files for Reference (Optional)
- [ ] `SEO-GUIDE.md` (documentation)
- [ ] `SEO-CHANGES-SUMMARY.md` (summary of changes)
- [ ] `DEPLOYMENT-CHECKLIST.md` (this file)

---

## Step 1: Deploy Files (Using Passenger)

### Upload Files to Server
```bash
# Navigate to your project directory
cd C:\Users\dellw\Documents\FREELANCE\new_mubfilters

# If using Git, commit and push
git add index.html robots.txt sitemap.xml .htaccess
git commit -m "SEO optimization: meta tags, structured data, sitemap"
git push origin main

# Or upload via FTP/SFTP to your server
# Make sure files are in the web root directory
```

### Verify File Locations
```
Your Web Root/
├── index.html          ← Must be here
├── robots.txt          ← Must be in root
├── sitemap.xml         ← Must be in root
├── .htaccess           ← Must be in root (Apache/Passenger)
└── assets/
    ├── img/
    ├── css/
    └── js/
```

---

## Step 2: Test After Deployment

### 2.1 Test Website Loads
- [ ] Visit: https://www.mubfilters.com
- [ ] Check if homepage loads correctly
- [ ] Check if images load
- [ ] Test mobile responsiveness

### 2.2 Test SEO Files
- [ ] Test robots.txt: https://www.mubfilters.com/robots.txt
  - Should show: "User-agent: * Allow: /"
  
- [ ] Test sitemap.xml: https://www.mubfilters.com/sitemap.xml
  - Should show XML content with URLs

### 2.3 Test Meta Tags
- [ ] Right-click page → View Page Source
- [ ] Verify title shows: "MUB Filters - Pabrik Filter Rokok Terbaik di Indonesia"
- [ ] Check meta description is present
- [ ] Confirm structured data (JSON-LD) is visible

### 2.4 Test Social Media Preview
- [ ] Use Facebook Debugger: https://developers.facebook.com/tools/debug/
- [ ] Enter: https://www.mubfilters.com
- [ ] Click "Scrape Again"
- [ ] Verify preview image and text appear correctly

### 2.5 Test with SEO Tools
- [ ] **Google Mobile-Friendly Test**
  - Visit: https://search.google.com/test/mobile-friendly
  - Test URL: https://www.mubfilters.com
  - Result should be: "Page is mobile-friendly"

- [ ] **Rich Results Test**
  - Visit: https://search.google.com/test/rich-results
  - Test URL: https://www.mubfilters.com
  - Should detect: Organization, Manufacturer schemas

- [ ] **PageSpeed Insights**
  - Visit: https://pagespeed.web.dev/
  - Test URL: https://www.mubfilters.com
  - Target: 80+ score

---

## Step 3: Google Search Console Setup (CRITICAL!)

### 3.1 Add Property
1. [ ] Go to: https://search.google.com/search-console
2. [ ] Click "Add Property"
3. [ ] Choose "URL prefix"
4. [ ] Enter: https://www.mubfilters.com
5. [ ] Verify ownership (HTML file upload or meta tag method)

### 3.2 Submit Sitemap
1. [ ] In Google Search Console, go to "Sitemaps"
2. [ ] Enter: sitemap.xml
3. [ ] Click "Submit"
4. [ ] Wait for confirmation (may take a few hours)

### 3.3 Request Indexing
1. [ ] In Google Search Console, use URL Inspection tool
2. [ ] Enter: https://www.mubfilters.com
3. [ ] Click "Request Indexing"
4. [ ] Repeat for any important pages

---

## Step 4: Google Business Profile Setup

### 4.1 Create/Claim Business
1. [ ] Go to: https://business.google.com
2. [ ] Click "Manage now"
3. [ ] Search for: "PT Mulia Usaha Bersama"
4. [ ] If exists, claim it. If not, create new.

### 4.2 Complete Business Information
- [ ] **Business Name**: PT Mulia Usaha Bersama
- [ ] **Category**: Manufacturing, Industrial Company
- [ ] **Address**: [Your factory address in Malang]
- [ ] **Phone**: [Your business phone]
- [ ] **Website**: https://www.mubfilters.com
- [ ] **Hours**: [Your business hours]

### 4.3 Add Photos
- [ ] Upload factory exterior
- [ ] Upload production floor
- [ ] Upload team photos
- [ ] Upload product photos
- [ ] Aim for 10+ photos

### 4.4 Add Business Description
```
PT Mulia Usaha Bersama (MUB) adalah pabrik filter rokok terbaik di Indonesia. 
Berlokasi di Malang, Jawa Timur, kami memproduksi filter rokok berkualitas tinggi 
dengan kapasitas lebih dari 100 juta filter per bulan. MUB melayani pasar domestik 
dan internasional dengan teknologi modern dan standar ISO 9001.
```

---

## Step 5: Analytics Setup

### 5.1 Google Analytics 4
1. [ ] Go to: https://analytics.google.com
2. [ ] Create account and property
3. [ ] Get Measurement ID (format: G-XXXXXXXXXX)
4. [ ] Add tracking code to index.html (before </head>):

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

5. [ ] Replace G-XXXXXXXXXX with your actual ID
6. [ ] Re-deploy index.html
7. [ ] Test: Visit site and check Real-Time reports in Analytics

---

## Step 6: Bing Webmaster Tools

1. [ ] Visit: https://www.bing.com/webmasters
2. [ ] Add your site: https://www.mubfilters.com
3. [ ] Verify ownership
4. [ ] Submit sitemap: sitemap.xml
5. [ ] Configure URL parameters (if any)

---

## Step 7: Social Media Setup

### 7.1 Facebook Business Page
- [ ] Create page: https://www.facebook.com/pages/create
- [ ] Add business information
- [ ] Upload cover photo and profile picture
- [ ] Add website link: https://www.mubfilters.com
- [ ] Post about your products/services

### 7.2 LinkedIn Company Page
- [ ] Create page: https://www.linkedin.com/company/setup/new/
- [ ] Complete company details
- [ ] Add employees
- [ ] Post company updates

### 7.3 Instagram Business Account
- [ ] Convert to business account
- [ ] Add website link in bio
- [ ] Post product photos
- [ ] Use hashtags: #mubfilters #pabrikfilter #filterrokok

---

## Step 8: Monitor & Track

### Week 1 Monitoring
- [ ] Day 1: Check if Google crawled site (Search Console)
- [ ] Day 3: Check indexing status
- [ ] Day 7: Check for any errors in Search Console
- [ ] Monitor: Page load speed

### Week 2-4 Monitoring
- [ ] Check keyword rankings weekly
- [ ] Monitor Google Analytics traffic
- [ ] Review Search Console impressions/clicks
- [ ] Check for any crawl errors

### Monthly Monitoring
- [ ] Review analytics report
- [ ] Check keyword position changes
- [ ] Update sitemap if content changed
- [ ] Create new content/blog posts

---

## Step 9: Content Marketing (Ongoing)

### Create Blog Posts
- [ ] "Cara Memilih Pabrik Filter Rokok Terbaik"
- [ ] "Teknologi Produksi Filter Rokok di MUB"
- [ ] "Standar Kualitas Filter Rokok Internasional"
- [ ] "Mengapa Memilih MUB Filters?"

### Get Backlinks
- [ ] List on Indonesian business directories
- [ ] Register on IndoTrading, Alibaba Indonesia
- [ ] Submit to industry directories
- [ ] Partner with tobacco industry websites
- [ ] Press releases about company news

---

## Step 10: SSL Certificate (IMPORTANT!)

### Ensure HTTPS is Enabled
- [ ] Check if https://www.mubfilters.com works
- [ ] If not, install SSL certificate on server
- [ ] Free option: Let's Encrypt
- [ ] After SSL installed, update .htaccess to force HTTPS:

```apache
# Uncomment these lines in .htaccess
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## Common Issues & Solutions

### Issue: robots.txt shows 404
**Solution**: Ensure file is in root directory, not in subdirectory

### Issue: Sitemap not loading
**Solution**: Check XML syntax, ensure no special characters

### Issue: Meta tags not showing in search
**Solution**: Wait 1-2 weeks for Google to re-crawl

### Issue: Site not indexing
**Solution**: Submit URL in Google Search Console, check robots.txt

### Issue: Slow loading
**Solution**: Enable Gzip compression, optimize images, use CDN

---

## Success Indicators

### Week 1 ✅
- [ ] Google Search Console shows site
- [ ] Sitemap submitted and processing
- [ ] No crawl errors

### Week 2-4 ✅
- [ ] Site appears in Google search for "mubfilters"
- [ ] Brand keywords ranking
- [ ] Google Analytics showing visitors

### Month 2-3 ✅
- [ ] Multiple keywords ranking
- [ ] Organic traffic increasing
- [ ] Social media profiles established
- [ ] Google Business Profile active

### Month 4-6 ✅
- [ ] Top 10 for competitive keywords
- [ ] Consistent organic traffic
- [ ] Customer inquiries from search
- [ ] Strong local SEO presence

---

## Emergency Contacts

### If Website Goes Down:
1. Check Passenger status
2. Check server logs
3. Verify domain DNS settings
4. Contact hosting provider

### If SEO Issues:
1. Check Google Search Console for errors
2. Run SEO audit with Screaming Frog
3. Test structured data validator
4. Check robots.txt and sitemap.xml

---

## Final Pre-Launch Checklist

Before going live, verify:
- [ ] index.html uploaded and working
- [ ] robots.txt accessible at /robots.txt
- [ ] sitemap.xml accessible at /sitemap.xml
- [ ] All images loading correctly
- [ ] Mobile responsive design working
- [ ] SSL certificate installed (HTTPS working)
- [ ] All links working (no 404 errors)
- [ ] Contact form working (if applicable)
- [ ] Meta tags showing in page source
- [ ] Structured data present in source code
- [ ] Google Analytics tracking code added
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Google
- [ ] Social media preview tested

---

## Post-Launch Actions (First 30 Days)

### Week 1
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Create Google Business Profile
- [ ] Set up Google Analytics
- [ ] Share website on social media

### Week 2
- [ ] Monitor indexing status
- [ ] Check for crawl errors
- [ ] Start content creation
- [ ] Build first backlinks

### Week 3
- [ ] Create social media profiles
- [ ] Post regular updates
- [ ] Engage with industry communities
- [ ] Start building business directory listings

### Week 4
- [ ] Review analytics data
- [ ] Check keyword rankings
- [ ] Plan content calendar
- [ ] Reach out to partners for backlinks

---

## Maintenance Schedule

### Daily
- Check website is online
- Monitor Google Analytics (if time permits)

### Weekly
- Check Google Search Console for errors
- Review keyword rankings
- Post social media updates

### Monthly
- Full SEO audit
- Update sitemap if needed
- Create 2-3 blog posts
- Build 3-5 quality backlinks
- Review and optimize content

### Quarterly
- Comprehensive performance review
- Update meta descriptions if needed
- Refresh old content
- Analyze competitor SEO

---

## Resources & Tools

### Free SEO Tools
- Google Search Console
- Google Analytics
- Google Business Profile
- Bing Webmaster Tools
- Ubersuggest (keyword research)
- Google Keyword Planner

### Testing Tools
- Google Mobile-Friendly Test
- PageSpeed Insights
- Rich Results Test
- Schema Markup Validator
- Facebook Sharing Debugger

### Monitoring Tools
- Google Search Console
- Google Analytics
- SimilarWeb (competitor analysis)
- Ahrefs (if budget allows)

---

**Deployment Status:** ⏳ READY TO DEPLOY

**Next Action:** Upload files and complete Step 1

**Estimated Setup Time:** 2-3 hours

**Expected Results:** 2-4 weeks for initial rankings

---

Good luck with your SEO! 🚀


