# How to Add Your Photos

I've set up the gallery to use 9 photos. Here's how to add them:

## Step 1: Prepare Your Photos

You have 9 beautiful photos from your engagement/wedding events. Make sure they are:
- In JPG or JPEG format
- Named: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc. (up to `photo9.jpg`)
- Optimized for web (not too large - aim for 1-2MB each)

## Step 2: Add Photos to Images Folder

1. Open the `images` folder in your project: `C:\Users\mherh\source\repos\Ivitation\images`
2. Copy your 9 photos into this folder
3. Rename them to: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.

## Step 3: View Your Website

1. Double-click `index.html` to open in your browser
2. Scroll to the "Our Story" section
3. You should see your photos in the gallery!

## Alternative: Use Online Image URLs

If you prefer to host images online (Google Drive, Imgur, etc.):

1. Upload your photos to an image hosting service
2. Get the direct image URLs
3. Edit `script.js` file
4. Find the `galleryImages` array (around line 54)
5. Replace the image paths with your URLs:

```javascript
const galleryImages = [
    'https://your-image-host.com/photo1.jpg',
    'https://your-image-host.com/photo2.jpg',
    // etc...
];
```

## Photo Order Suggestions

Based on your photos, here's a suggested order:
1. Portrait of you both (the elegant one)
2. Champagne toast photo
3. Cheek kiss photo
4. Cake cutting photo
5. Staircase photo
6. Fountain photo
7. Mountain sunset selfie
8. Playful black & white photo
9. Picnic/outdoor kiss photo

But feel free to arrange them however you like!

---

**Note:** The gallery will work with any number of photos (1-9), so if you have fewer photos, that's fine too!

