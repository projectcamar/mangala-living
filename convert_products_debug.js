const fs = require('fs');
const path = require('path');

try {
    console.log('Starting conversion...');
    const filePath = path.join('src', 'data', 'productDescriptions.ts');
    if (!fs.existsSync(filePath)) {
        console.error('File not found:', filePath);
        process.exit(1);
    }

    let content = fs.readFileSync(filePath, 'utf8');
    console.log('Read file, length:', content.length);

    // Find start
    const startMarker = 'export const PRODUCT_DESCRIPTIONS: Record<string, MultiLanguageDescription> = {';
    const startIndex = content.indexOf(startMarker);
    console.log('Start index:', startIndex);

    if (startIndex === -1) {
        console.error('Start marker not found. Content start:', content.substring(0, 200));
        process.exit(1);
    }

    // Find end
    // Use the closing brace before the interface or next export
    const nextExport = 'export const getProductDescription';
    const endIndex = content.lastIndexOf('}', content.indexOf(nextExport));
    console.log('End index:', endIndex);

    if (endIndex === -1) {
        console.error('End marker not found');
        process.exit(1);
    }

    // Extract
    // We want from the opening brace of the object
    const objectStart = startIndex + startMarker.length - 1; // pointing to '{'
    let block = content.substring(objectStart, endIndex + 1);

    console.log('Block start:', block.substring(0, 50));
    console.log('Block end:', block.substring(block.length - 50));

    // Eval
    console.log('Evaluating...');
    const data = eval('(' + block + ')');
    console.log('Keys:', Object.keys(data));

    // Write JSON
    fs.writeFileSync(path.join('src', 'data', 'product-descriptions.json'), JSON.stringify(data, null, 2));
    console.log('Success!');

} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
