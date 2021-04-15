"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var TYPE = process.argv[2] || process.argv[2].toLocaleLowerCase();
var FILE_NAME = ((_a = process.argv[3]) === null || _a === void 0 ? void 0 : _a.charAt(0).toUpperCase()) + ((_b = process.argv[3]) === null || _b === void 0 ? void 0 : _b.slice(1));
var checkIsPresent = function () {
    if (!TYPE || !FILE_NAME) {
        console.log("Enter 1st argument as folder name and 2nd argument as component name");
        process.exit(0);
    }
};
checkIsPresent();
fs.readFile(__dirname + "/template/index.tsx.gen", function (error, data) {
    if (error) {
        console.log(error);
        return;
    }
    console.log(data);
});
// const generateFile = (filePath: string, context: string) => {
//     fs.writeFile(filePath, "", (error) => {
//         if(error) {
//             console.log(error);
//             return;
//         }
//         console.log("file generated");
//     });
// }
// fs.mkdir(FILE_NAME, { recursive: true }, (error) => {
//    const indexFilePath = `${TYPE}/${FILE_NAME}/index.tsx`;
//     const scssFilePath = `${TYPE}/${FILE_NAME}/${FILE_NAME.toLowerCase()}.scss`
//     generateFile(indexFilePath)
// })    
