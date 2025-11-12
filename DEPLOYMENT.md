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

#### Apache Server (Most Common)
1. Upload all files from the `dist/` folder to your web server
2. Ensure the `.htaccess` file is uploaded (it's already in the dist folder)
3. Verify that Apache's `mod_rewrite` module is enabled
4. Make sure `.htaccess` files are allowed (check `AllowOverride` in Apache config)

#### Nginx Server
1. Upload all files from the `dist/` folder to your web server
2. Configure Nginx using the `nginx.conf` file as a reference
3. Add the `try_files` directive to your server block
4. Restart Nginx: `sudo systemctl restart nginx`

#### Static Hosting (Netlify, Vercel, etc.)
These platforms handle SPA routing automatically, but you may need to add a redirect rule:

**For Netlify:** Create a `_redirects` file in the `dist/` folder:
```
/* /index.html 200
```

**For Vercel:** Create a `vercel.json` in the root:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

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

