"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fantasticon_1 = require("fantasticon");
const fs = __importStar(require("fs"));
// import * as fs_extra from 'fs-extra'
(async function () {
    const fix_path = "rounded_fixed";
    const out_path = "fonts_rounded";
    const glyph_map = {};
    const files = fs.readdirSync(`${fix_path}/`);
    files.forEach((file, index) => {
        if (file.slice(-4) !== ".svg")
            return;
        glyph_map[file[0]] = file.charCodeAt(0);
        console.log(file[0], file.charCodeAt(0).toString(16));
        /* const svg_path = `${fix_path}/${file}`;
         const svg_glyph = fs.readFileSync(svg_path, 'utf-8').replace("0 0 136 120", `0 0 600 ${600/136*120}`);
         fs.writeFileSync(svg_path, svg_glyph, 'utf-8');*/
    });
    (0, fantasticon_1.generateFonts)({
        inputDir: `${fix_path}/`,
        outputDir: `${out_path}/`,
        name: "linzklar_rounded",
        fontTypes: [fantasticon_1.FontAssetType.TTF, fantasticon_1.FontAssetType.WOFF],
        assetTypes: [
            fantasticon_1.OtherAssetType.CSS,
            fantasticon_1.OtherAssetType.HTML,
            fantasticon_1.OtherAssetType.JSON,
            /* OtherAssetType.TS */ // The TS asset is buggy; remove
        ],
        fontHeight: 480,
        codepoints: glyph_map
    }).then(results => {
        console.log(results);
        // copy the resulting fonts into docs/
        // fs_extra.copy("fonts", "docs/fonts");
    });
})();
