# Wedding Invitation Website

A beautiful, modern, and aesthetic wedding invitation website with auto-playing music, elegant image gallery, and RSVP functionality.

## Features

- 🎵 **Background Music**: Auto-plays on page load with mute/unmute toggle
- 🖼️ **Elegant Image Gallery**: Beautiful thumbnail navigation (not small buttons at bottom)
- ⏰ **Countdown Timer**: Real-time countdown to the wedding date
- 📅 **Wedding Schedule**: Timeline of events with locations
- 📝 **RSVP Form**: Guest attendance confirmation
- 📱 **Fully Responsive**: Works beautifully on all devices
- ✨ **Smooth Animations**: Modern transitions and effects

## Setup Instructions

1. **Add Your Music File**
   - Place your music file in the root directory
   - Name it `music.mp3` (or `music.ogg` for better browser compatibility)
   - Supported formats: MP3, OGG

2. **Add Your Images**
   - Replace the placeholder images in `script.js`
   - Update the `galleryImages` array with your image URLs
   - Or use the `updateGalleryImages()` function to dynamically update images

3. **Customize Content**
   - Update names, dates, and locations in `index.html`
   - Modify colors in `styles.css` (CSS variables at the top)
   - Update the wedding date in `script.js` (line with `new Date('2025-10-30T11:30:00')`)

4. **Deploy**
   - Upload all files to your web hosting
   - Or use GitHub Pages, Netlify, Vercel, etc.

## File Structure

```
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # JavaScript functionality
├── music.mp3       # Background music (add your file)
└── README.md       # This file
```

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #d4a574;    /* Main accent color */
    --secondary-color: #f5e6d3;  /* Light background */
    --accent-color: #c89f7e;     /* Secondary accent */
}
```

### Adding Your Images
In `script.js`, replace the `galleryImages` array:
```javascript
const galleryImages = [
    'path/to/your/image1.jpg',
    'path/to/your/image2.jpg',
    // Add more images...
];
```

### Updating Wedding Date
In `script.js`, change the date:
```javascript
const weddingDate = new Date('2025-10-30T11:30:00').getTime();
```

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (may require user interaction for autoplay)
- Mobile browsers: Full support

## Notes

- Some browsers may block autoplay of audio. Users may need to interact with the page first.
- For best results, optimize your images before uploading.
- Music file should be reasonably sized for faster loading.

## Support

If you need help customizing the website, feel free to ask!

