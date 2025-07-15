Write-Host "Building SimpleSpeed application..." -ForegroundColor Green

# Create dist directory if it doesn't exist
if (-not (Test-Path "dist")) {
    New-Item -ItemType Directory -Path "dist" | Out-Null
    Write-Host "Created dist directory"
}

# Run Rollup to bundle JavaScript files
Write-Host "Running Rollup bundler..."
npx rollup -c

# Fix the path in bundle.js
Write-Host "Fixing sound path in bundle.js..."
if (Test-Path "dist\bundle.js") {
    $bundleContent = Get-Content "dist\bundle.js" -Raw
    $bundleContent = $bundleContent -replace 'const path = `\.\./sounds/\$\{instrument\}/\$\{octave\}/\$\{note\}\.wav`', 'const path = `./sounds/${instrument}/${octave}/${note}.wav`'
    Set-Content "dist\bundle.js" $bundleContent
    Write-Host "Updated sound path from ../sounds/ to ./sounds/"
} else {
    Write-Host "Warning: bundle.js not found in dist directory" -ForegroundColor Yellow
}

# Copy index.html to dist directory
Write-Host "Copying index.html..."
Copy-Item "src\index.html" "dist\index.html" -Force

# Fix the script tag in the copied HTML file
Write-Host "Fixing script tag in index.html..."
$content = Get-Content "dist\index.html" -Raw
$content = $content -replace '<script\s+src="app\.js"\s*(?:\r?\n)?\s*type="module"></script>', '<script src="bundle.js"></script>'
Set-Content "dist\index.html" $content

# Copy CSS file to dist directory
Write-Host "Copying CSS file..."
Copy-Item "src\styles.css" "dist\styles.css" -Force

# Create sounds directory in dist if it doesn't exist
if (-not (Test-Path "dist\sounds")) {
    New-Item -ItemType Directory -Path "dist\sounds" | Out-Null
    Write-Host "Created dist\sounds directory"
}

# Copy sound files to dist directory
Write-Host "Copying sound files..."
if (Test-Path "sounds") {
    Copy-Item "sounds\*" "dist\sounds\" -Recurse -Force
} else {
    Write-Host "Warning: sounds directory not found" -ForegroundColor Yellow
}

Write-Host "Build completed successfully!" -ForegroundColor Green