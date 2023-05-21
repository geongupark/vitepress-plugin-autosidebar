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
exports.getSidebar = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
function getSidebar(rootPath, directoryPath, excludeFileName = ['index']) {
    const extension = '.md';
    const fullPath = path.join(rootPath, directoryPath);
    return new Promise((resolve, reject) => {
        fs.readdir(fullPath, (err, files) => {
            if (err) {
                reject(err);
            }
            else {
                const filteredFiles = files.filter(file => path.extname(file) === extension && !excludeFileName.includes(path.basename(file, extension)));
                const result = filteredFiles.map(file => ({
                    text: path.basename(file, extension),
                    link: path.join(directoryPath, path.basename(file, extension)).replace(/\\/gi, "/")
                }));
                console.log(result);
                resolve(result);
            }
        });
    });
}
exports.getSidebar = getSidebar;
