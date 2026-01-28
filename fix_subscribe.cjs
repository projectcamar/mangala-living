
const fs = require('fs');
const filePath = 'c:\\Mangala Living\\mangala-living\\api\\subscribe.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Specific fixes for the broken sections
const fixes = [
    { from: /< !DOCTYPE html >/g, to: '<!DOCTYPE html>' },
    { from: /<html lang="id" >/g, to: '<html lang="id">' },
    { from: /<head>/g, to: '<head>' },
    { from: /<meta charset="UTF-8" >/g, to: '<meta charset="UTF-8">' },
    { from: /<meta name="viewport" content = "width=device-width, initial-scale=1.0" >/g, to: '<meta name="viewport" content="width=device-width, initial-scale=1.0">' },
    { from: /<link rel="preconnect" href = "https:\/\/fonts.googleapis.com" >/g, to: '<link rel="preconnect" href="https://fonts.googleapis.com">' },
    { from: /<link rel="preconnect" href = "https:\/\/fonts.gstatic.com" crossorigin >/g, to: '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' },
    { from: /<link href="https:\/\/fonts.googleapis.com\/css2\?family=Plus\+Jakarta+Sans:wght@400;500;600;700&display=swap" rel = "stylesheet" >/g, to: '<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">' },
    { from: /<\/head>/g, to: '</head>' },
    { from: /< body style = "/g, to: '<body style="' },
    { from: /<table width="100%" cellpadding = "0" cellspacing = "0"/g, to: '<table width="100%" cellpadding="0" cellspacing="0"' },
    { from: /<table width="600" cellpadding = "0" cellspacing = "0"/g, to: '<table width="600" cellpadding="0" cellspacing="0"' },
    { from: /<table width = "100%" cellpadding = "0" cellspacing = "0"/g, to: '<table width="100%" cellpadding="0" cellspacing="0"' },
    { from: /<td align="center" >/g, to: '<td align="center">' },
    { from: /<h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;" >/g, to: '<h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">' },
    { from: /< p style = "margin: 8px 0 0; color: #8B7355; font-size: 14px; font-weight: 500;" >/g, to: '<p style="margin: 8px 0 0; color: #8B7355; font-size: 14px; font-weight: 500;">' },
    { from: /< !--Content Card-- >/g, to: '<!-- Content Card -->' },
    { from: /<div style="background-color: #ffffff; border: 2px solid #e8e8e8; border-radius: 8px; padding: 30px;" >/g, to: '<div style="background-color: #ffffff; border: 2px solid #e8e8e8; border-radius: 8px; padding: 30px;">' },
    { from: /<h2 style="margin: 0 0 25px; color: #2c2c2c; font-size: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 3px solid #8B7355; padding-bottom: 12px;" >/g, to: '<h2 style="margin: 0 0 25px; color: #2c2c2c; font-size: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 3px solid #8B7355; padding-bottom: 12px;">' },
    { from: /<div style="display: inline-block; width: 140px; color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px;" >/g, to: '<div style="display: inline-block; width: 140px; color: #666; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.3px;">' },
    { from: /< div style = "display: inline-block; color: #2c2c2c; font-weight: 500; font-size: 15px;" >/g, to: '<div style="display: inline-block; color: #2c2c2c; font-weight: 500; font-size: 15px;">' },
    { from: /< div style = "display: inline-block;" >/g, to: '<div style="display: inline-block;">' },
    { from: /<a href="mailto:\${email}" style = "color: #8B7355; text-decoration: none; font-weight: 600; font-size: 15px; border-bottom: 2px solid #8B7355; padding-bottom: 2px;" >/g, to: '<a href="mailto:${email}" style="color: #8B7355; text-decoration: none; font-weight: 600; font-size: 15px; border-bottom: 2px solid #8B7355; padding-bottom: 2px;">' },
    { from: /< tr >/g, to: '<tr>' },
    { from: /< !--Timestamp Card-- >/g, to: '<!-- Timestamp Card -->' },
    { from: /<div style="background-color: #f8f9fa; border-left: 4px solid #8B7355; border-radius: 6px; padding: 20px; margin-top: 25px;" >/g, to: '<div style="background-color: #f8f9fa; border-left: 4px solid #8B7355; border-radius: 6px; padding: 20px; margin-top: 25px;">' },
    { from: /< div style = "color: #2c2c2c; font-size: 15px; font-weight: 500;" >/g, to: '<div style="color: #2c2c2c; font-size: 15px; font-weight: 500;">' },
    { from: /< !--Footer-- >/g, to: '<!-- Footer -->' },
    { from: /< !--Footer -->/g, to: '<!-- Footer -->' },
    { from: /<p style="margin: 0; color: #666; font-size: 12px;" >/g, to: '<p style="margin: 0; color: #666; font-size: 12px;">' },
    { from: /< p style = "margin: 8px 0 0; color: #999; font-size: 11px;" >/g, to: '<p style="margin: 8px 0 0; color: #999; font-size: 11px;">' },
    { from: /<\/table>/g, to: '</table>' },
    { from: /<\/td>/g, to: '</td>' },
    { from: /<\/tr>/g, to: '</tr>' },
    { from: /<\/body>/g, to: '</body>' },
    { from: /<\/html>/g, to: '</html>' },
    { from: /<\/div>/g, to: '</div>' },
    { from: /<\/a>/g, to: '</a>' },
    { from: /` ;/g, to: '`;' },
    { from: /" > /g, to: '">' },
    { from: /" >/g, to: '">' },
];

fixes.forEach(fix => {
    content = content.replace(fix.from, fix.to);
});

// Fix isPageVisit specific ones
content = content.replace(/font - family/g, 'font-family');
content = content.replace(/line - height/g, 'line-height');
content = content.replace(/max - width/g, 'max-width');
content = content.replace(/linear - gradient/g, 'linear-gradient');
content = content.replace(/border - radius/g, 'border-radius');
content = content.replace(/text - align/g, 'text-align');
content = content.replace(/font - size/g, 'font-size');
content = content.replace(/letter - spacing/g, 'letter-spacing');
content = content.replace(/border - top/g, 'border-top');
content = content.replace(/info - box/g, 'info-box');
content = content.replace(/info - label/g, 'info-label');
content = content.replace(/info - value/g, 'info-value');
content = content.replace(/highlight - box/g, 'highlight-box');
content = content.replace(/stat - box/g, 'stat-box');
content = content.replace(/stat - number/g, 'stat-number');
content = content.replace(/stat - label/g, 'stat-label');
content = content.replace(/page - icon/g, 'page-icon');
content = content.replace(/stats - container/g, 'stats-container');
content = content.replace(/0 %/g, '0%');
content = content.replace(/100 %/g, '100%');
content = content.replace(/< body >/g, '<body>');
content = content.replace(/<div class="container" >/g, '<div class="container">');
content = content.replace(/<div class="header" >/g, '<div class="header">');
content = content.replace(/<div class="content" >/g, '<div class="content">');
content = content.replace(/<div class="page-icon" >/g, '<div class="page-icon">');
content = content.replace(/<div class="highlight-box" >/g, '<div class="highlight-box">');
content = content.replace(/<div class="info-label" >/g, '<div class="info-label">');
content = content.replace(/<div class="info-value" >/g, '<div class="info-value">');
content = content.replace(/<strong >/g, '<strong>');
content = content.replace(/<\/div >/g, '</div>');
content = content.replace(/<\/strong >/g, '</strong>');

fs.writeFileSync(filePath, content);
console.log('Fixed subscribe.ts');
