const fs = require('fs');
let html = fs.readFileSync('body.html', 'utf8');
// Remove body tags
html = html.replace(/<body[^>]*>/, '').replace(/<\/body>[\s\S]*<\/html>/, '');
// Replace class= with className=
html = html.replace(/class=/g, 'className=');
// Other specific replacements if needed
html = html.replace(/playsinline/g, 'playsInline');
html = html.replace(/for=/g, 'htmlFor=');
// Replace standard comments
html = html.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
// Replace unclosed elements manually
html = html.replace(/<source([^>]*?[^\/])>/g, '<source$1 />');
html = html.replace(/<img([^>]*?[^\/])>/g, '<img$1 />');
html = html.replace(/<hr([^>]*?[^\/])>/g, '<hr$1 />');
html = html.replace(/<br([^>]*?[^\/])>/g, '<br$1 />');
html = html.replace(/<meta([^>]*?[^\/])>/g, '<meta$1 />');

const output = `export default function Home() {
  return (
    <>
${html}
    </>
  );
}
`;
fs.writeFileSync('app/page.jsx', output);
