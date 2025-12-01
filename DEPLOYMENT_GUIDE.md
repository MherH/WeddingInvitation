# How to Run & Publish Your Wedding Invitation Website

## 🚀 Quick Start - View Locally

### Option 1: Double-Click Method (Easiest)
1. Navigate to your project folder: `C:\Users\mherh\source\repos\Ivitation`
2. Double-click on `index.html`
3. It will open in your default web browser
4. **Note**: Music may not autoplay until you click somewhere on the page (browser security)

### Option 2: Using a Local Server (Recommended for Testing)
1. Open PowerShell in your project folder
2. Run one of these commands:

**Python (if installed):**
```powershell
python -m http.server 8000
```

**Node.js (if installed):**
```powershell
npx http-server -p 8000
```

3. Open your browser and go to: `http://localhost:8000`
4. Press `Ctrl+C` to stop the server when done

---

## 📤 Publishing Options (Choose One)

### Option 1: Netlify Drop (EASIEST - No Account Needed!)

**Steps:**
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop your entire project folder (`Ivitation` folder) onto the page
3. Wait a few seconds - Netlify will give you a URL like: `https://random-name-123.netlify.app`
4. **Done!** Share this URL with your guests
5. (Optional) Click "Site settings" → "Change site name" to customize the URL

**Pros:**
- ✅ Free
- ✅ No account needed
- ✅ Instant deployment
- ✅ HTTPS included
- ✅ Works with music files

---

### Option 2: GitHub Pages (Free & Professional)

**Steps:**
1. **Create GitHub Account** (if you don't have one): [github.com](https://github.com)
2. **Install Git** (if not installed): [git-scm.com/downloads](https://git-scm.com/downloads)
3. **Create a new repository:**
   - Go to GitHub → Click "+" → "New repository"
   - Name it: `wedding-invitation` (or any name)
   - Make it **Public**
   - Click "Create repository"

4. **Upload your files:**
   ```powershell
   cd C:\Users\mherh\source\repos\Ivitation
   git init
   git add .
   git commit -m "Initial wedding invitation website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/wedding-invitation.git
   git push -u origin main
   ```
   (Replace `YOUR-USERNAME` with your GitHub username)

5. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be at: `https://YOUR-USERNAME.github.io/wedding-invitation`

**Pros:**
- ✅ Free forever
- ✅ Professional URL
- ✅ Easy updates (just push changes)

---

### Option 3: Vercel (Very Easy)

**Steps:**
1. Go to [vercel.com](https://vercel.com) and sign up (free)
2. Click "Add New Project"
3. Import your GitHub repository (or drag & drop folder)
4. Click "Deploy"
5. Get your URL: `https://your-project.vercel.app`

**Pros:**
- ✅ Free
- ✅ Very fast
- ✅ Automatic HTTPS

---

### Option 4: Surge.sh (Simple Command Line)

**Steps:**
1. Install Node.js: [nodejs.org](https://nodejs.org)
2. Install Surge:
   ```powershell
   npm install -g surge
   ```
3. In your project folder, run:
   ```powershell
   surge
   ```
4. Follow the prompts (create account if needed)
5. Your site will be live at: `https://your-name.surge.sh`

---

## 📝 Before Publishing Checklist

- [ ] Add your music file (`music.mp3`) to the folder
- [ ] Add your photos (update `script.js` with your image paths)
- [ ] Update names in `index.html`
- [ ] Update wedding date in `script.js`
- [ ] Update schedule locations in `index.html`
- [ ] Test the website locally first

---

## 🎵 Adding Music File

1. Get your music file (MP3 format recommended)
2. Place it in the same folder as `index.html`
3. Name it exactly: `music.mp3`
4. The website will automatically use it

---

## 📸 Adding Your Images

When you're ready to add your photos:

1. **Option A - Local Images:**
   - Create a folder called `images` in your project
   - Put your photos there
   - Update `script.js` line 50-56:
   ```javascript
   const galleryImages = [
       'images/photo1.jpg',
       'images/photo2.jpg',
       'images/photo3.jpg',
       // Add more...
   ];
   ```

2. **Option B - Online Images:**
   - Upload images to Imgur, Google Drive (public), or similar
   - Copy the image URLs
   - Update `script.js` with those URLs

---

## 🔗 Sharing with Guests

Once published, you'll get a URL like:
- `https://your-wedding.netlify.app`
- `https://yourname.github.io/wedding-invitation`
- `https://your-project.vercel.app`

**Share this URL via:**
- WhatsApp
- Email
- Text message
- Social media
- QR code (generate at [qr-code-generator.com](https://www.qr-code-generator.com))

---

## 🆘 Troubleshooting

**Music doesn't play automatically?**
- This is normal! Browsers block autoplay for security
- Guests can click the music button to play
- Or click anywhere on the page first, then music will play

**Images not showing?**
- Check file paths are correct
- Make sure images are in the right folder
- For online hosting, use full URLs (https://...)

**Website looks broken?**
- Make sure all files are in the same folder:
  - `index.html`
  - `styles.css`
  - `script.js`
  - `music.mp3` (optional)

---

## 💡 Recommended: Netlify Drop

For the easiest experience, use **Netlify Drop**:
1. No account needed
2. Just drag and drop
3. Get instant URL
4. Free forever

Go to: [https://app.netlify.com/drop](https://app.netlify.com/drop)

---

## Need Help?

If you get stuck, let me know and I'll help you through the process!

