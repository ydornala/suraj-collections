import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { ethers } from "ethers";
import { InformationGetter, ERC721A } from "../typechain-types";
import InformationGetterABI from "../InformationGetter.json";
import MetaDrobeABI from "../Metadrobe.json";
import { UrnStuff } from "../generalStuff";

export const singularHelpWomen = async (
  tokenId: string,
  collectionName: string
) => {
  try {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://polygon-rpc.com/"
    );

    const contract = new ethers.Contract(
      "0x4c1573189e308d0a4d8bec421082fa8e39eee58e",
      MetaDrobeABI.abi,
      provider
    ) as ERC721A;

    const ownerOfLol = await contract.ownerOf(tokenId);

    return {
      id: `0x4c1573189e308d0a4d8bec421082fa8e39eee58e:${tokenId}`,
      amount: 1,
      urn: {
        decentraland: `urn:decentraland:matic:collections-thirdparty:${collectionName}:0x4c1573189e308d0a4d8bec421082fa8e39eee58e:${tokenId}`,
      },
    };
  } catch (error) {
    return {
      id: `0x4c1573189e308d0a4d8bec421082fa8e39eee58e:${tokenId}`,

      amount: 0,
      urn: {
        decentraland: "",
      },
    };
  }
};

export const singularHelpMen = async (
  tokenId: string,
  collectionName: string
) => {
    try {
        const provider = new ethers.providers.JsonRpcProvider(
            "https://polygon-rpc.com/"
          );
        
          const contract = new ethers.Contract(
            "0x6f691a8ae2e7dbf6c0e15f1757ad9b80b01196bf",
            MetaDrobeABI.abi,
            provider
          ) as ERC721A;
        
          const ownerOfLol = await contract.ownerOf(tokenId);
        
          return {
            id: `0x6f691a8ae2e7dbf6c0e15f1757ad9b80b01196bf:${tokenId}`,
            amount: 1,
            urn: {
              decentraland: `urn:decentraland:matic:collections-thirdparty:${collectionName}:0x6f691a8ae2e7dbf6c0e15f1757ad9b80b01196bf:${tokenId}`,
            },
          };
    } catch(err){
        console.error(err);
        return {
            id: `0x6f691a8ae2e7dbf6c0e15f1757ad9b80b01196bf:${tokenId}`,
    
            amount: 0,
            urn: {
              decentraland: "",
            },
          };
    }

};
