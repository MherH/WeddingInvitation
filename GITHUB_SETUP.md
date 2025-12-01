# GitHub Pages Setup Guide

## Step 1: Run Locally First (Test Your Website)

### Quick Method:
1. **Double-click** `start-server.bat` in your project folder
   - OR double-click `index.html` to open directly in browser

2. If the batch file doesn't work, open PowerShell in your project folder and run:
   ```powershell
   python -m http.server 8000
   ```
   Then open: `http://localhost:8000` in your browser

3. **Test everything:**
   - Check names (Mher & Angela)
   - Check date (June 6, 2026)
   - Check countdown timer
   - Test music button
   - Test image gallery
   - Test RSVP form

---

## Step 2: Create GitHub Repository

1. **Go to GitHub**: [github.com](https://github.com)
2. **Sign in** (or create account if needed)
3. **Click the "+" icon** (top right) → **"New repository"**
4. **Repository settings:**
   - Name: `wedding-invitation` (or any name you like)
   - Description: "Wedding invitation website for Mher & Angela"
   - **Make it PUBLIC** (required for free GitHub Pages)
   - **DO NOT** check "Initialize with README"
   - Click **"Create repository"**

---

## Step 3: Install Git (if not installed)

1. **Check if Git is installed:**
   ```powershell
   git --version
   ```
   
2. **If not installed**, download from: [git-scm.com/downloads](https://git-scm.com/downloads)
   - Download Windows version
   - Install with default settings
   - Restart PowerShell after installation

---

## Step 4: Upload Files to GitHub

**Open PowerShell in your project folder:**
```powershell
cd C:\Users\mherh\source\repos\Ivitation
```

**Run these commands one by one:**

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial wedding invitation website"

# Rename branch to main (if needed)
git branch -M main

# Add your GitHub repository (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/wedding-invitation.git

# Push files to GitHub
git push -u origin main
```

**When you run `git push`, GitHub will ask for:**
- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (not your password)
  - Go to: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
  - Click "Generate new token"
  - Name it: "Wedding Website"
  - Check "repo" permission
  - Click "Generate token"
  - Copy the token and use it as password

---

## Step 5: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. Click **"Settings"** tab (top of repository page)
3. Scroll down to **"Pages"** (left sidebar)
4. Under **"Source"**, select:
   - Branch: **`main`**
   - Folder: **`/ (root)`**
5. Click **"Save"**
6. Wait 1-2 minutes for GitHub to build your site
7. Your website will be at:
   ```
   https://YOUR-USERNAME.github.io/wedding-invitation
   ```

---

## Step 6: Share Your Website!

Your guests can now visit:
```
https://YOUR-USERNAME.github.io/wedding-invitation
```

Share this URL via:
- WhatsApp
- Email
- Text message
- Social media

---

## Updating Your Website Later

When you want to make changes:

1. **Edit files** (index.html, styles.css, script.js)
2. **Test locally** (double-click index.html)
3. **Upload changes to GitHub:**
   ```powershell
   git add .
   git commit -m "Updated wedding website"
   git push
   ```
4. **Wait 1-2 minutes** - GitHub Pages will automatically update!

---

## Troubleshooting

**"git is not recognized"**
- Install Git from [git-scm.com/downloads](https://git-scm.com/downloads)
- Restart PowerShell after installation

**"Repository not found"**
- Check your GitHub username is correct
- Make sure repository is PUBLIC (not private)

**"Authentication failed"**
- Use Personal Access Token instead of password
- See Step 4 for token creation

**Website shows 404**
- Wait 2-3 minutes after enabling Pages
- Check repository is PUBLIC
- Make sure branch is `main` and folder is `/ (root)`

**Music doesn't play**
- Make sure `music.mp3` file is in the repository
- Some browsers block autoplay - guests can click music button

---

## Need Help?

If you get stuck at any step, let me know and I'll help you!

