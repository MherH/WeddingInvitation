Write-Host "Starting local web server..." -ForegroundColor Green
Write-Host ""
Write-Host "Your website will be available at: http://localhost:8000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server when you're done." -ForegroundColor Yellow
Write-Host ""

# Try Python first, then Node.js
try {
    python -m http.server 8000
} catch {
    Write-Host "Python not found, trying Node.js..." -ForegroundColor Yellow
    try {
        npx http-server -p 8000
    } catch {
        Write-Host "Neither Python nor Node.js found. Please install one of them." -ForegroundColor Red
        Write-Host "Or simply double-click index.html to view in browser." -ForegroundColor Yellow
        pause
    }
}

