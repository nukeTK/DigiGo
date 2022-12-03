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

  const result = {};
  fs.writeFileSync(path.join(__dirname, `../deployments.json`), JSON.stringify(result));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
