/**
 * scripts/generate-favicon.js
 * Generates all favicon variants from src/assets/images/lgs-logo.jpg
 * Run once with: node scripts/generate-favicon.js
 */

const sharp = require('sharp');
const pngToIco = require('png-to-ico');
const fs = require('fs');
const path = require('path');

const SOURCE = path.resolve(__dirname, '../src/assets/images/lgs-logo.jpg');
const OUT    = path.resolve(__dirname, '../favicons');

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);

async function generate() {
  console.log('Generating favicons from', SOURCE);

  // PNG variants
  const sizes = [
    { name: 'favicon-16x16.png',   size: 16  },
    { name: 'favicon-32x32.png',   size: 32  },
    { name: 'favicon-48x48.png',   size: 48  },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'favicon-192x192.png', size: 192 },
    { name: 'favicon-512x512.png', size: 512 },
  ];

  for (const { name, size } of sizes) {
    await sharp(SOURCE)
      .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png()
      .toFile(path.join(OUT, name));
    console.log(`  ✓ ${name} (${size}x${size})`);
  }

  // favicon.ico — pass file paths to the default export (accepts array of PNG paths)
  const icoPaths = [];
  for (const size of [16, 32, 48]) {
    const tmpPath = path.join(OUT, `_tmp-ico-${size}.png`);
    await sharp(SOURCE)
      .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png()
      .toFile(tmpPath);
    icoPaths.push(tmpPath);
  }
  const fn = pngToIco.default || pngToIco;
  const icoData = await fn(icoPaths);
  icoPaths.forEach(p => fs.unlinkSync(p));
  fs.writeFileSync(path.join(OUT, 'favicon.ico'), icoData);
  console.log('  ✓ favicon.ico (16+32+48px layers)');

  // Also copy favicon.ico to project root (browsers fetch /favicon.ico automatically)
  fs.copyFileSync(path.join(OUT, 'favicon.ico'), path.resolve(__dirname, '../favicon.ico'));
  console.log('  ✓ favicon.ico copied to project root');

  console.log('\nDone. All files written to favicons/');
}

generate().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});

