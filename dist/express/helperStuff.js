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
exports.metadrobeMenHelper = exports.metadrobeWomenHelper = void 0;
const ethers_1 = require("ethers");
const InformationGetter_json_1 = __importDefault(require("../InformationGetter.json"));
const Metadrobe_json_1 = __importDefault(require("../Metadrobe.json"));
const metadrobeWomenHelper = (address, collectionName) => __awaiter(void 0, void 0, void 0, function* () {
    const provider = new ethers_1.ethers.providers.JsonRpcProvider("https://polygon-rpc.com/");
    const informationGetter = new ethers_1.ethers.Contract("0x1EB08aDd92B9e29e9d41Ff570fa675d2fb844d11", InformationGetter_json_1.default.abi, provider);
    const contract = new ethers_1.ethers.Contract("0x4c1573189e308d0a4d8bec421082fa8e39eee58e", Metadrobe_json_1.default.abi, provider);
    const addressAssets = yield contract.balanceOf(address);
    const assetNumber = addressAssets.toNumber();
    const assetList = yield informationGetter.getTokensOfAddress("0x4c1573189e308d0a4d8bec421082fa8e39eee58e", address);
    const assets = [];
    for (let i = 0; i < assetNumber; i++) {
        const assetNumber = assetList[i].toNumber();
        assets.push({
            id: `0x4c1573189e308d0a4d8bec421082fa8e39eee58e:${assetNumber.toString()}`,
            amount: 1,
            urn: {
                decentraland: `urn:decentraland:matic:collections-thirdparty:${collectionName}:0x4c1573189e308d0a4d8bec421082fa8e39eee58e:${assetNumber.toString()}`,
            },
        });
    }
    const toJson = {
        address: address,
        assets: assets,
        total: assetNumber,
        page: 1,
        next: "",
    };
    return toJson;
});
exports.metadrobeWomenHelper = metadrobeWomenHelper;
const metadrobeMenHelper = (address, collectionName) => __awaiter(void 0, void 0, void 0, function* () {
    const provider = new ethers_1.ethers.providers.JsonRpcProvider("https://polygon-rpc.com/");
    const informationGetter = new ethers_1.ethers.Contract("0x1EB08aDd92B9e29e9d41Ff570fa675d2fb844d11", InformationGetter_json_1.default.abi, provider);
    const contract = new ethers_1.ethers.Contract("0x6f691a8ae2e7dbf6c0e15f1757ad9b80b01196bf", Metadrobe_json_1.default.abi, provider);
    const addressAssets = yield contract.balanceOf(address);
    const assetNumber = addressAssets.toNumber();
    const assetList = yield informationGetter.getTokensOfAddress("0x6f691a8ae2e7dbf6c0e15f1757ad9b80b01196bf", address);
    const assets = [];
    for (let i = 0; i < assetNumber; i++) {
        const assetNumber = assetList[i].toNumber();
        assets.push({
            id: `0x6f691a8ae2e7dbf6c0e15f1757ad9b80b01196bf:${assetNumber.toString()}`,
            amount: 1,
            urn: {
                decentraland: `urn:decentraland:matic:collections-thirdparty:${collectionName}:0x6f691a8ae2e7dbf6c0e15f1757ad9b80b01196bf:${assetNumber.toString()}`,
            },
        });
    }
    const toJson = {
        address: address,
        assets: assets,
        total: assetNumber,
        page: 1,
        next: "",
    };
    return toJson;
});
exports.metadrobeMenHelper = metadrobeMenHelper;
