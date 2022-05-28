// loop in file in folder
import fs, { readdirSync } from 'fs';
const files = readdirSync('./src/TypeScript');

// require all files in folder
files.forEach(file => {
  require(`./TypeScript/${file}`);
});