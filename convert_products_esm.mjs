import fs from 'fs';
import path from 'path';

try {
    console.log('Starting conversion (ESM)...');
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
        console.error('Start marker not found');
        process.exit(1);
    }

    // Find end
    const nextExport = 'export const getProductDescription';
    const endIndex = content.lastIndexOf('}', content.indexOf(nextExport));
    console.log('End index:', endIndex);

    if (endIndex === -1) {
        console.error('End marker not found');
        process.exit(1);
    }

    // Extract
    const objectStart = startIndex + startMarker.length - 1; // pointing to '{'
    let block = content.substring(objectStart, endIndex + 1);

    // Evaluate using Function constructor or similar?
    // In ESM, 'eval' still works.

    console.log('Evaluating...');
    // We need to wrap in parens to be an expression
    const data = eval('(' + block + ')');

    console.log('Keys found:', Object.keys(data).length);

    // Write JSON
    fs.writeFileSync(path.join('src', 'data', 'product-descriptions.json'), JSON.stringify(data, null, 2));
    console.log('Success!');

} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
