const { readFileSync, writeFileSync } = require('fs');

const r = readFileSync('../content/first.txt', 'utf-8');

writeFileSync('./content/firstOUT.txt', `Exportando en un TXT \nEl otro tenía esto:\n${r}`);