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
const fs = __importStar(require("fs"));
const path = process.argv[2] ?? (() => { throw new Error("入力パスを `node gen.js rounded 乾湿搾窄` のような形で指定して実行してください。"); })();
const zi = process.argv[3] ?? (() => { throw new Error("入力パスを `node gen.js rounded 乾湿搾窄` のような形で指定して実行してください。"); })();
for (const z of zi) {
    fs.writeFileSync(`${path}/${z}.svg`, `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="1000"
   height="1000"
   viewBox="0 0 264.58333 264.58333"
   version="1.1"
   id="svg5"
   sodipodi:docname="${z}.svg"
   inkscape:version="1.2 (dc2aedaf03, 2022-05-15)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview14"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     showgrid="false"
     inkscape:zoom="0.57558492"
     inkscape:cx="628.05676"
     inkscape:cy="534.23915"
     inkscape:window-width="1920"
     inkscape:window-height="1001"
     inkscape:window-x="-9"
     inkscape:window-y="-9"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg5" />
  <defs
     id="defs2" />
  <path
     style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.5"
     d="M 251.40343,94.633744 14.428583,171.12929"
     id="path2443"
     sodipodi:nodetypes="cc" />
  <path
     style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.5"
     d="M 118.21087,251.43962 41.490491,13.768221"
     id="path409"
     sodipodi:nodetypes="cc" />
  <path
     style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.5"
     d="M 251.40338,41.716975 14.428583,118.21252"
     id="path471"
     sodipodi:nodetypes="cc" />
  <path
     style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.5"
     d="M 251.40343,147.55031 14.428583,224.04585"
     id="path473"
     sodipodi:nodetypes="cc" />
  <path
     style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.5"
     d="M 224.0442,251.43959 147.32382,13.768221"
     id="path475"
     sodipodi:nodetypes="cc" />
  <path
     style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.5"
     d="M 171.12754,251.43959 94.407157,13.768123"
     id="path477"
     sodipodi:nodetypes="cc" />
  <path
     style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.5"
     d="M 14.402064,251.43962 14.428523,13.768123"
     id="path292"
     sodipodi:nodetypes="cc" />
  <path
     style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.5"
     d="m 251.39015,251.43962 0.0265,-237.671497"
     id="path400"
     sodipodi:nodetypes="cc" />
  <path
     style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.5"
     d="M 14.428523,13.768123 H 251.41661"
     id="path413"
     sodipodi:nodetypes="cc" />
  <path
     style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.5"
     d="M 14.428523,251.43962 H 251.41661"
     id="path451"
     sodipodi:nodetypes="cc" />
  <path
     style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.5"
     d="M 144.66921,251.43964 67.948824,13.768244"
     id="path466"
     sodipodi:nodetypes="cc" />
  <path
     style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.5"
     d="M 197.58587,251.43964 120.86549,13.768244"
     id="path468"
     sodipodi:nodetypes="cc" />
  <path
     style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.5"
     d="M 251.40338,68.175308 14.428583,144.67086"
     id="path485"
     sodipodi:nodetypes="cc" />
  <path
     style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.5"
     d="M 251.40338,121.09197 14.428583,197.58752"
     id="path487"
     sodipodi:nodetypes="cc" />
</svg>
`);
}
