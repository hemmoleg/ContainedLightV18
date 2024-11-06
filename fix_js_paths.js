const fs = require('fs');
const path = require('path');

// Path to the 'browser' folder
const browserPath = path.join(__dirname, 'dist', 'ContainedLight-v18', 'browser');

// Function to traverse subdirectories and find index.html files
function findIndexFiles(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    const indexFiles = [];

    files.forEach(file => {
        const fullPath = path.join(dir, file.name);
        if (file.isDirectory()) {
            // Recurse into subdirectory
            indexFiles.push(...findIndexFiles(fullPath));
        } else if (file.isFile() && file.name === 'index.html') {
            // Ensure the file is in a subdirectory by checking its path
            if (path.dirname(fullPath) !== browserPath) {
                indexFiles.push(fullPath);
            }
        }
    });

    return indexFiles;
}

// Function to modify the src attribute in script tags and href attribute in link tags
function modifyAttributes(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace src attribute for main-*.js and polyfills-*.js
    content = content.replace(/<script\s+src="(main-[^"]+\.js|polyfills-[^"]+\.js)"/g, '<script src="./../$1"');

    // Replace href attribute for styles-*.css
    content = content.replace(/<link\s+rel="stylesheet"\s+href="(styles-[^"]+\.css)"/g, '<link rel="stylesheet" href="./../$1"');

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated attributes in: ${filePath}`);
}

// Find all index.html files and modify them
const indexFiles = findIndexFiles(browserPath);
indexFiles.forEach(modifyAttributes);

console.log('Attribute modification complete.');