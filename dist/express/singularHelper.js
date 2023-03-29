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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.singularHelpMen = exports.singularHelpWomen = void 0;
const ethers_1 = require("ethers");
const Metadrobe_json_1 = __importDefault(require("../Metadrobe.json"));
const singularHelpWomen = (tokenId, collectionName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const provider = new ethers_1.ethers.providers.JsonRpcProvider("https://polygon-rpc.com/");
        const contract = new ethers_1.ethers.Contract("0x4c1573189e308d0a4d8bec421082fa8e39eee58e", Metadrobe_json_1.default.abi, provider);
        const ownerOfLol = yield contract.ownerOf(tokenId);
        return {
            id: `0x4c1573189e308d0a4d8bec421082fa8e39eee58e:${tokenId}`,
            amount: 1,
            urn: {
                decentraland: `urn:decentraland:matic:collections-thirdparty:${collectionName}:0x4c1573189e308d0a4d8bec421082fa8e39eee58e:${tokenId}`,
            },
        };
    }
    catch (error) {
        return {
            id: `0x4c1573189e308d0a4d8bec421082fa8e39eee58e:${tokenId}`,
            amount: 0,
            urn: {
                decentraland: "",
            },
        };
    }
});
exports.singularHelpWomen = singularHelpWomen;
const singularHelpMen = (tokenId, collectionName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const provider = new ethers_1.ethers.providers.JsonRpcProvider("https://polygon-rpc.com/");
        const contract = new ethers_1.ethers.Contract("0x6f691a8ae2e7dbf6c0e15f1757ad9b80b01196bf", Metadrobe_json_1.default.abi, provider);
        const ownerOfLol = yield contract.ownerOf(tokenId);
        return {
            id: `0x6f691a8ae2e7dbf6c0e15f1757ad9b80b01196bf:${tokenId}`,
            amount: 1,
            urn: {
                decentraland: `urn:decentraland:matic:collections-thirdparty:${collectionName}:0x6f691a8ae2e7dbf6c0e15f1757ad9b80b01196bf:${tokenId}`,
            },
        };
    }
    catch (err) {
        console.error(err);
        return {
            id: `0x6f691a8ae2e7dbf6c0e15f1757ad9b80b01196bf:${tokenId}`,
            amount: 0,
            urn: {
                decentraland: "",
            },
        };
    }
});
exports.singularHelpMen = singularHelpMen;
