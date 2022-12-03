/* eslint-disable camelcase */
import { EntryPoint__factory } from "@account-abstraction/contracts";
import { SampleRecipient__factory } from "@account-abstraction/utils/dist/src/types";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

import { PAYMASTER_STAKE, UNSTAKE_DELAY_SEC } from "../config";
import { DigiGoWalletUserOpHandler } from "../lib/account-abstraction/DigiGoWalletUserOpHandler";
import {
  DigiGoWallet__factory,
  DigiGoWalletDeployer__factory,
  EIP4337Manager__factory,
  GnosisSafe__factory,
  MockPayment__factory,
} from "../typechain-types";

describe("DigiGoWallet", function () {
  async function fixture() {
    const provider = ethers.provider;
    const [signer, walletOwner] = await ethers.getSigners();
    const beneficiary = await signer.getAddress();
    const entryPoint = await new EntryPoint__factory(signer).deploy(PAYMASTER_STAKE, UNSTAKE_DELAY_SEC);
    const safeSingleton = await new GnosisSafe__factory(signer).deploy();
    const aaModule = await new EIP4337Manager__factory(signer).deploy(entryPoint.address);
    const factory = await new DigiGoWalletDeployer__factory(signer).deploy();
    const sampleRecipient = await new SampleRecipient__factory(signer).deploy();
    const mockPayment = await new MockPayment__factory(signer).deploy();

    return {
      provider,
      signer,
      walletOwner,
      beneficiary,
      entryPoint,
      safeSingleton,
      aaModule,
      factory,
      sampleRecipient,
      mockPayment,
    };
  }
  it("should work", async () => {
    const {
      provider,
      signer,
      walletOwner,
      beneficiary,
      entryPoint,
      safeSingleton,
      aaModule,
      factory,
      sampleRecipient,
      mockPayment,
    } = await fixture();
    const userOpHandler = new DigiGoWalletUserOpHandler({
      signer: walletOwner,
      entryPointAddress: entryPoint.address,
      singletonAddress: safeSingleton.address,
      aaModuleAddress: aaModule.address,
      factoryAddress: factory.address,
    });
    const walletAddress = await userOpHandler.getWalletAddress();
    expect(await provider.getCode(walletAddress).then((code) => code.length)).to.equal(2);
    await signer.sendTransaction({
      to: walletAddress,
      value: ethers.utils.parseEther("1"),
    });
    const preDeployOP = await userOpHandler.createSignedUserOp({
      target: sampleRecipient.address,
      data: sampleRecipient.interface.encodeFunctionData("something", ["hello"]),
    });
    await expect(entryPoint.handleOps([preDeployOP], beneficiary))
      .to.emit(sampleRecipient, "Sender")
      .withArgs(anyValue, walletAddress, "hello");
    expect(await provider.getCode(walletAddress).then((code) => code.length)).to.greaterThan(100);
    const digiGoWallet = DigiGoWallet__factory.connect(walletAddress, signer);
    // this is just additinal test
    expect(await digiGoWallet.thisIsTestAndShouldReturnValue()).to.eq("thisIsTestAndShouldReturnValue");
    // this is tested to make sure tx passed when sender is already deployed
    // const postDeployOp = await userOpHandler.createSignedUserOp({
    //   target: sampleRecipient.address,
    //   data: sampleRecipient.interface.encodeFunctionData("something", ["hello"]),
    // });
    // await expect(entryPoint.handleOps([postDeployOp], beneficiary))
    //   .to.emit(sampleRecipient, "Sender")
    //   .withArgs(anyValue, walletAddress, "hello");

    // await entryPoint.handleOps([postDeployOp], beneficiary);

    // const postDeployOp2 = await userOpHandler.createSignedUserOp({
    //   target: sampleRecipient.address,
    //   data: sampleRecipient.interface.encodeFunctionData("something", ["hello"]),
    // });
    // await expect(entryPoint.handleOps([postDeployOp], beneficiary))
    //   .to.emit(sampleRecipient, "Sender")
    //   .withArgs(anyValue, walletAddress, "hello");

    // await entryPoint.handleOps([postDeployOp2], beneficiary);
    // payment
    const amount = 1;
    // // normal
    // // op
    const paymentOp = await userOpHandler.createSignedUserOp({
      target: mockPayment.address,
      data: mockPayment.interface.encodeFunctionData("pay"),
      value: amount,
    });
    await entryPoint.handleOps([paymentOp], beneficiary);
  });
});
