'use strict';
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
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const helperStuff_1 = require("./helperStuff");
const singularHelper_1 = require("./singularHelper");
const womenCollection = 'metadrobewomen';
const menCollection = 'metadrobemen';
const router = express.Router();
router.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello from Express.js!</h1>');
    res.end();
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));
router.get('/registry/:collectionMeme/address/:address/assets', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { address, id, collectionMeme } = req.params;
    try {
        if (womenCollection === collectionMeme) {
            const toSend = yield (0, helperStuff_1.metadrobeWomenHelper)(address, womenCollection);
            res.send(JSON.stringify(toSend));
        }
        else if (menCollection === collectionMeme) {
            const toSend = yield (0, helperStuff_1.metadrobeMenHelper)(address, menCollection);
            res.send(JSON.stringify(toSend));
        }
        else {
            res.send(JSON.stringify({
                address: address,
                assets: [],
                total: 0,
                page: 1,
                next: ''
            }));
        }
    }
    catch (err) {
        console.error(err);
        res.send(JSON.stringify({
            address: address,
            assets: [],
            total: 0,
            page: 1,
            next: ''
        }));
    }
}));
router.get('/registry/:collectionName/address/:address/assets/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { address, id, collectionName } = req.params;
    try {
        if (collectionName === womenCollection) {
            const toSend = yield (0, singularHelper_1.singularHelpWomen)(id, womenCollection);
            res.send(JSON.stringify(toSend));
        }
        else if (collectionName === menCollection) {
            const toSend = yield (0, singularHelper_1.singularHelpMen)(id, menCollection);
            res.send(JSON.stringify(toSend));
        }
        else {
            res.send(JSON.stringify({
                address: '0x4c1573189e308d0a4d8bec421082fa8e39eee58e',
                amount: 0,
                urn: {
                    decentraland: ''
                }
            }));
        }
    }
    catch (err) {
        console.error(err);
        res.send(JSON.stringify({
            address: '0x4c1573189e308d0a4d8bec421082fa8e39eee58e',
            amount: 0,
            urn: {
                decentraland: ''
            }
        }));
    }
}));
app.use(bodyParser.json());
app.use('/.netlify/functions/server', router); // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));
module.exports = app;
module.exports.handler = serverless(app);
