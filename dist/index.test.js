"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('getSidebar', () => {
    it('returns the correct sidebar items', () => __awaiter(void 0, void 0, void 0, function* () {
        // given
        const rootPath = __dirname;
        const directoryPath = '';
        // when
        const result = yield (0, index_1.getSidebar)(rootPath, directoryPath);
        // then
        expect(result).toEqual([
            { text: 'README', link: 'README' },
        ]);
    }));
    it('handles empty directory', () => __awaiter(void 0, void 0, void 0, function* () {
        // given
        const rootPath = __dirname;
        const directoryPath = '';
        const excludeFileName = ['README'];
        // when
        const result = yield (0, index_1.getSidebar)(rootPath, directoryPath, excludeFileName);
        // then
        expect(result).toEqual([]);
    }));
});
