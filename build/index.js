"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// loop in file in folder
const fs_1 = require("fs");
const files = (0, fs_1.readdirSync)('./src/TypeScript');
// require all files in folder
files.forEach(file => {
    require(`./TypeScript/${file}`);
});
