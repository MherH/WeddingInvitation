# Quick Fix: Add Your Photos

## The Problem
The gallery shows a placeholder because your photos aren't in the `images` folder yet.

## The Solution (3 Simple Steps)

### Step 1: Open the Images Folder
Navigate to: `C:\Users\mherh\source\repos\Ivitation\images`

### Step 2: Add Your Photos
Copy your 9 wedding photos into this folder and rename them:
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- `photo4.jpg`
- `photo5.jpg`
- `photo6.jpg`
- `photo7.jpg`
- `photo8.jpg`
- `photo9.jpg`

### Step 3: Refresh Your Browser
Press `F5` or refresh the page - your photos will appear!

---

## Alternative: Use Fewer Photos

If you have fewer than 9 photos, that's fine! Just:
1. Add the photos you have (photo1.jpg, photo2.jpg, etc.)
2. Edit `script.js` file
3. Find the `galleryImages` array (around line 54)
4. Remove the lines for photos you don't have

For example, if you only have 5 photos:
```javascript
const galleryImages = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg',
    'images/photo4.jpg',
    'images/photo5.jpg'
];
```

---

## Photo Tips
- Use JPG or JPEG format
- Keep file sizes reasonable (1-2MB each is good)
- Photos will automatically resize to fit the gallery

---

**That's it!** Once you add the photos, refresh your browser and they'll appear beautifully in the gallery.

