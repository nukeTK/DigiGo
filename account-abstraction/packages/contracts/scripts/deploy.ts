/* eslint-disable camelcase */
import { EntryPoint__factory } from "@account-abstraction/contracts";
import fs from "fs";
import { ethers } from "hardhat";
import path from "path";

import { PAYMASTER_STAKE, UNSTAKE_DELAY_SEC } from "../config";
import { EIP4337Manager__factory } from "../typechain-types";
import { DeterministicDeployer } from "./helper/infinitism/DeterministicDeployer";

async function main() {
  const [signer] = await ethers.getSigners();
  console.log("signer", signer.address);

  const entryPointCreationArgument = ethers.utils.defaultAbiCoder.encode(
    ["uint256", "uint256"],
    [PAYMASTER_STAKE, UNSTAKE_DELAY_SEC]
  );
  const entryPointCreationCode = ethers.utils.solidityPack(
    ["bytes", "bytes"],
    [EntryPoint__factory.bytecode, entryPointCreationArgument]
  );
  const entryPointAddress = await DeterministicDeployer.deploy(entryPointCreationCode);

  const accountAbstractionModuleCreationArgument = ethers.utils.defaultAbiCoder.encode(
    ["address"],
    [entryPointAddress]
  );
  const accountAbstractionModuleCreationnCode = ethers.utils.solidityPack(
    ["bytes", "bytes"],
    [EIP4337Manager__factory.bytecode, accountAbstractionModuleCreationArgument]
  );
  const accountAbstractionModuleAddress = await DeterministicDeployer.deploy(accountAbstractionModuleCreationnCode);

  const result = {
    entryPoint: entryPointAddress,
    accountAbstractionModule: accountAbstractionModuleAddress,
  };
  fs.writeFileSync(path.join(__dirname, `../deployments.json`), JSON.stringify(result));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
