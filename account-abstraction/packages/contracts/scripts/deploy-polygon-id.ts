/* eslint-disable camelcase */
import fs from "fs";
import { ethers } from "hardhat";
import path from "path";

const hexToBytes = (hex: string) => {
  // eslint-disable-next-line no-var
  for (var bytes = [], c = 0; c < hex.length; c += 2) {
    /**
     * @dev parseInt 16 = parsed as a hexadecimal number
     */
    bytes.push(parseInt(hex.substr(c, 2), 16));
  }
  return bytes;
};

const fromLittleEndian = (bytes: number[]) => {
  const n256 = BigInt(256);
  let result = BigInt(0);
  let base = BigInt(1);
  bytes.forEach((byte) => {
    result += base * BigInt(byte);
    base = base * n256;
  });
  return result;
};

async function main() {
  const [signer] = await ethers.getSigners();

  const circuitId = "credentialAtomicQuerySig";
  const VerificationResistory = await ethers.getContractFactory("VerificationResistory");
  const verificationResistory = await VerificationResistory.deploy();
  await verificationResistory.deployed()

  console.log("deployed", verificationResistory.address)
  // Main validator address on mumbai - https://mumbai.polygonscan.com/address/0xb1e86C4c687B85520eF4fd2a0d14e81970a15aFB#code
  // - do not change for testnet
  const validatorAddress = "0xb1e86C4c687B85520eF4fd2a0d14e81970a15aFB";

  // ChiroProtect schema hash
  const schemaHash = "56876e9c1720028b6702dbd3056548a8"; // extracted from PID Platform

  const schemaEnd = fromLittleEndian(hexToBytes(schemaHash));
  const query = {
    schema: ethers.BigNumber.from(schemaEnd),
    slotIndex: 2, // slotIndex2 indicates the value stored as Attribute 1 inside the claim
    operator: 1,
    // 20020101 refers to the numerical date we're using for our proof request
    // - see proofRequest.ts L489
    value: [1, ...new Array(63).fill(0).map((i) => 0)], // the value must be 1 = true
    circuitId,
  };
  const requestId = await verificationResistory.TRANSFER_REQUEST_ID();
  const tx = await verificationResistory.setZKPRequest(
    requestId, // 1
    validatorAddress,
    query
  );
  await tx.wait();
  console.log(
    `Request set at:\nNOTE: May take a little bit to show up\nhttps://mumbai.polygonscan.com/tx/${tx.hash}`
  );




}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
