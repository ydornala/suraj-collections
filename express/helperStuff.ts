import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { ethers } from "ethers";
import { InformationGetter, ERC721A } from "../typechain-types";
import InformationGetterABI from "../InformationGetter.json";
import MetaDrobeABI from "../Metadrobe.json";
import { UrnStuff } from "../generalStuff";

export const metadrobeWomenHelper = async (
  address: string,
  collectionName: string
) => {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://polygon-rpc.com/"
  );

  const informationGetter = new ethers.Contract(
    "0x1EB08aDd92B9e29e9d41Ff570fa675d2fb844d11",
    InformationGetterABI.abi,
    provider
  ) as InformationGetter;

  const contract = new ethers.Contract(
    "0x4c1573189e308d0a4d8bec421082fa8e39eee58e",
    MetaDrobeABI.abi,
    provider
  ) as ERC721A;

  const addressAssets = await contract.balanceOf(address);
  const assetNumber = addressAssets.toNumber();

  const assetList = await informationGetter.getTokensOfAddress(
    "0x4c1573189e308d0a4d8bec421082fa8e39eee58e",
    address
  );

  const assets: UrnStuff[] = [];

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
};

export const metadrobeMenHelper = async (
    address: string,
    collectionName: string
  ) => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://polygon-rpc.com/"
    );
  
    const informationGetter = new ethers.Contract(
      "0x1EB08aDd92B9e29e9d41Ff570fa675d2fb844d11",
      InformationGetterABI.abi,
      provider
    ) as InformationGetter;
  
    const contract = new ethers.Contract(
      "0x6f691a8ae2e7dbf6c0e15f1757ad9b80b01196bf",
      MetaDrobeABI.abi,
      provider
    ) as ERC721A;
  
    const addressAssets = await contract.balanceOf(address);
    const assetNumber = addressAssets.toNumber();
  
    const assetList = await informationGetter.getTokensOfAddress(
      "0x6f691a8ae2e7dbf6c0e15f1757ad9b80b01196bf",
      address
    );
  
    const assets: UrnStuff[] = [];
  
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
  };