/**
 * Inject Vercel Web Analytics script into all HTML files
 * 
 * This script adds the Vercel Web Analytics tracking code to all HTML files
 * in the public directory. The analytics script is injected before the closing
 * </head> tag to ensure it loads early.
 */

const fs = require('fs');
const path = require('path');

// Vercel Web Analytics script to inject
const ANALYTICS_SCRIPT = `
<!-- Vercel Web Analytics -->
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
`;

/**
 * Recursively find all HTML files in a directory
 */
function findHTMLFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findHTMLFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

/**
 * Check if file already has Vercel Analytics script
 */
function hasAnalyticsScript(content) {
  return content.includes('_vercel/insights/script.js') || 
         content.includes('window.va =') ||
         content.includes('Vercel Web Analytics');
}

/**
 * Inject analytics script into HTML content
 */
function injectAnalytics(content) {
  // Check if analytics script is already present
  if (hasAnalyticsScript(content)) {
    return { modified: false, content };
  }
  
  // Find the closing </head> tag and inject before it
  const headCloseRegex = /(<\/head>)/i;
  if (headCloseRegex.test(content)) {
    const modifiedContent = content.replace(
      headCloseRegex,
      `${ANALYTICS_SCRIPT}\n$1`
    );
    return { modified: true, content: modifiedContent };
  }
  
  return { modified: false, content };
}

/**
 * Main function
 */
function main() {
  const publicDir = path.join(__dirname, '..', 'public');
  
  if (!fs.existsSync(publicDir)) {
    console.error('Error: public directory not found');
    process.exit(1);
  }
  
  console.log('Finding HTML files...');
  const htmlFiles = findHTMLFiles(publicDir);
  console.log(`Found ${htmlFiles.length} HTML files`);
  
  let modifiedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;
  
  htmlFiles.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const { modified, content: newContent } = injectAnalytics(content);
      
      if (modified) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        modifiedCount++;
        console.log(`✓ Modified: ${path.relative(publicDir, filePath)}`);
      } else {
        skippedCount++;
        console.log(`- Skipped: ${path.relative(publicDir, filePath)} (already has analytics or no <head> tag)`);
      }
    } catch (error) {
      errorCount++;
      console.error(`✗ Error processing ${filePath}:`, error.message);
    }
  });
  
  console.log('\n=== Summary ===');
  console.log(`Total files: ${htmlFiles.length}`);
  console.log(`Modified: ${modifiedCount}`);
  console.log(`Skipped: ${skippedCount}`);
  console.log(`Errors: ${errorCount}`);
  
  if (errorCount > 0) {
    process.exit(1);
  }
}

// Run the script
main();
