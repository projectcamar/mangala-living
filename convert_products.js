const fs = require('fs');
const path = require('path');

try {
    const filePath = path.join('src', 'data', 'productDescriptions.ts');
    let content = fs.readFileSync(filePath, 'utf8');

    // Find start
    const startMarker = 'export const PRODUCT_DESCRIPTIONS: Record<string, MultiLanguageDescription> = {';
    const startIndex = content.indexOf(startMarker);

    if (startIndex === -1) {
        throw new Error('Start marker not found');
    }

    // Find end (the start of the next export)
    const endMarker = 'export const getProductDescription';
    const endIndex = content.indexOf(endMarker, startIndex);

    if (endIndex === -1) {
        throw new Error('End marker not found');
    }

    // Extract the assignment part
    let block = content.substring(startIndex, endIndex);

    // Clean it up to be an expression we can eval
    // Remove the declaration part
    block = block.replace(startMarker, '{');

    // Remove the last semicolon if present, and trim
    block = block.trim();
    if (block.endsWith(';')) {
        block = block.slice(0, -1);
    }

    // Eval
    // Note: The content uses backticks for strings, which is valid JS.
    const result = eval('(' + block + ')');

    // Write JSON
    fs.writeFileSync(path.join('src', 'data', 'product-descriptions.json'), JSON.stringify(result, null, 2));
    console.log('JSON file created successfully.');

} catch (err) {
    console.error('Conversion failed:', err);
    process.exit(1);
}
