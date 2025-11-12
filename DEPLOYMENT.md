# Router Fix for Production Deployment

## Problem
When refreshing pages in production (e.g., visiting `/teaching` or `/about` directly), the website returns a 404 error. This happens because the web server looks for physical files at these paths, which don't exist in a single-page application (SPA).

## Solution Implemented

### 1. Updated Webpack Configuration
- Added `publicPath: '/'` to the output configuration
- Installed and configured `copy-webpack-plugin` to automatically copy `.htaccess` to the dist folder during build

### 2. Created Server Configuration Files

#### For Apache Servers (.htaccess)
The `.htaccess` file redirects all requests to `index.html`, allowing Vue Router to handle routing.

Location: `.htaccess` (root) and `dist/.htaccess`

#### For Nginx Servers (nginx.conf)
If your server uses Nginx, use the `nginx.conf` configuration instead.

## Deployment Steps

### Step 1: Rebuild Your Application
```bash
npm run build
```

This will create a production build in the `dist/` folder with the `.htaccess` file included.

### Step 2: Deploy Based on Your Server Type

#### Netlify (Recommended)
The project is fully configured for Netlify deployment with automatic routing support.

**Option A: Deploy via Git (Recommended)**
1. Push your code to GitHub, GitLab, or Bitbucket
2. Log in to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Netlify will automatically detect the `netlify.toml` configuration
6. Click "Deploy site"

**Option B: Manual Deploy via Netlify CLI**
```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Build your project
npm run build

# Deploy (first time)
netlify deploy --prod

# Follow the prompts to create a new site or link to existing
```

**Option C: Drag and Drop**
1. Run `npm run build` locally
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder onto the page
4. Your site will be deployed instantly

**Configuration Files:**
- `netlify.toml` - Build settings and redirect rules
- `_redirects` - Backup redirect configuration (automatically copied to dist/)

**What's Configured:**
- ✅ Build command: `npm run build`
- ✅ Publish directory: `dist`
- ✅ SPA routing (all routes redirect to index.html)
- ✅ Asset caching (1 year for JS, CSS, images)
- ✅ Automatic HTTPS
- ✅ CDN distribution

#### Apache Server
1. Upload all files from the `dist/` folder to your web server
2. Ensure the `.htaccess` file is uploaded (it's already in the dist folder)
3. Verify that Apache's `mod_rewrite` module is enabled
4. Make sure `.htaccess` files are allowed (check `AllowOverride` in Apache config)

#### Nginx Server
1. Upload all files from the `dist/` folder to your web server
2. Configure Nginx using the `nginx.conf` file as a reference
3. Add the `try_files` directive to your server block
4. Restart Nginx: `sudo systemctl restart nginx`

#### Other Static Hosting Providers

**For Vercel:** Create a `vercel.json` in the root:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**For GitHub Pages:** Add a `404.html` that's a copy of `index.html` in the dist folder.

**For AWS S3 + CloudFront:** Configure error pages to redirect 404 errors to index.html.

## Testing
After deployment, test by:
1. Navigating to a sub-page (e.g., `/teaching`)
2. Refreshing the page (F5 or Cmd+R)
3. The page should load correctly instead of showing a 404 error

## Troubleshooting

### Still getting 404 errors?
- **Apache:** Ensure `mod_rewrite` is enabled: `sudo a2enmod rewrite`
- **Apache:** Check that `.htaccess` files are being read (AllowOverride All)
- **Nginx:** Verify the nginx config is loaded and Nginx is restarted
- Clear your browser cache and try again
- Check server error logs for more details

### .htaccess file not working?
Contact your hosting provider to ensure:
- Apache mod_rewrite module is enabled
- .htaccess files are allowed (AllowOverride directive)
- The file was uploaded (some FTP clients hide dotfiles by default)

