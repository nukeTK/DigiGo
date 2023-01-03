/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export declare namespace ICircuitValidator {
  export type CircuitQueryStruct = {
    schema: PromiseOrValue<BigNumberish>;
    slotIndex: PromiseOrValue<BigNumberish>;
    operator: PromiseOrValue<BigNumberish>;
    value: PromiseOrValue<BigNumberish>[];
    circuitId: PromiseOrValue<string>;
  };

  export type CircuitQueryStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber[],
    string
  ] & {
    schema: BigNumber;
    slotIndex: BigNumber;
    operator: BigNumber;
    value: BigNumber[];
    circuitId: string;
  };
}

export interface VerificationResistoryInterface extends utils.Interface {
  functions: {
    "CONNEXT_AMOUNT_FOR_NONE()": FunctionFragment;
    "CONNEXT_ASSET_FOR_NONE()": FunctionFragment;
    "TRANSFER_REQUEST_ID()": FunctionFragment;
    "bridges(uint32)": FunctionFragment;
    "connext()": FunctionFragment;
    "getSupportedRequests()": FunctionFragment;
    "getZKPRequest(uint64)": FunctionFragment;
    "owner()": FunctionFragment;
    "proofs(address,uint64)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "requestQueries(uint64)": FunctionFragment;
    "requestValidators(uint64)": FunctionFragment;
    "setBridge(uint32,address)": FunctionFragment;
    "setZKPRequest(uint64,address,(uint256,uint256,uint256,uint256[],string))": FunctionFragment;
    "submitZKPResponse(uint64,uint256[],uint256[2],uint256[2][2],uint256[2])": FunctionFragment;
    "supportedRequests(uint256)": FunctionFragment;
    "sync(uint32,uint256,uint256,address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "verified(address)": FunctionFragment;
    "xReceive(bytes32,uint256,address,address,uint32,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "CONNEXT_AMOUNT_FOR_NONE"
      | "CONNEXT_ASSET_FOR_NONE"
      | "TRANSFER_REQUEST_ID"
      | "bridges"
      | "connext"
      | "getSupportedRequests"
      | "getZKPRequest"
      | "owner"
      | "proofs"
      | "renounceOwnership"
      | "requestQueries"
      | "requestValidators"
      | "setBridge"
      | "setZKPRequest"
      | "submitZKPResponse"
      | "supportedRequests"
      | "sync"
      | "transferOwnership"
      | "verified"
      | "xReceive"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "CONNEXT_AMOUNT_FOR_NONE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CONNEXT_ASSET_FOR_NONE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TRANSFER_REQUEST_ID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bridges",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "connext", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getSupportedRequests",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getZKPRequest",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proofs",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestQueries",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "requestValidators",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setBridge",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setZKPRequest",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      ICircuitValidator.CircuitQueryStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "submitZKPResponse",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supportedRequests",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "sync",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "verified",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "xReceive",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "CONNEXT_AMOUNT_FOR_NONE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CONNEXT_ASSET_FOR_NONE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TRANSFER_REQUEST_ID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bridges", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "connext", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSupportedRequests",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getZKPRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proofs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestQueries",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestValidators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBridge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setZKPRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitZKPResponse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportedRequests",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sync", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verified", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "xReceive", data: BytesLike): Result;

  events: {
    "BridgeSet(uint32,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BridgeSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface BridgeSetEventObject {
  domainId: number;
  bridge: string;
}
export type BridgeSetEvent = TypedEvent<[number, string], BridgeSetEventObject>;

export type BridgeSetEventFilter = TypedEventFilter<BridgeSetEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface VerificationResistory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VerificationResistoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    CONNEXT_AMOUNT_FOR_NONE(overrides?: CallOverrides): Promise<[BigNumber]>;

    CONNEXT_ASSET_FOR_NONE(overrides?: CallOverrides): Promise<[string]>;

    TRANSFER_REQUEST_ID(overrides?: CallOverrides): Promise<[BigNumber]>;

    bridges(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    connext(overrides?: CallOverrides): Promise<[string]>;

    getSupportedRequests(
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { arr: BigNumber[] }>;

    getZKPRequest(
      requestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[ICircuitValidator.CircuitQueryStructOutput]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proofs(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requestQueries(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string] & {
        schema: BigNumber;
        slotIndex: BigNumber;
        operator: BigNumber;
        circuitId: string;
      }
    >;

    requestValidators(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setBridge(
      domainId_: PromiseOrValue<BigNumberish>,
      bridge: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setZKPRequest(
      requestId: PromiseOrValue<BigNumberish>,
      validator: PromiseOrValue<string>,
      query: ICircuitValidator.CircuitQueryStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitZKPResponse(
      requestId: PromiseOrValue<BigNumberish>,
      inputs: PromiseOrValue<BigNumberish>[],
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b: [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportedRequests(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    sync(
      destination: PromiseOrValue<BigNumberish>,
      relayerFee: PromiseOrValue<BigNumberish>,
      slippage: PromiseOrValue<BigNumberish>,
      sub: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verified(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    xReceive(
      transferId: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      asset: PromiseOrValue<string>,
      originSender: PromiseOrValue<string>,
      origin: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  CONNEXT_AMOUNT_FOR_NONE(overrides?: CallOverrides): Promise<BigNumber>;

  CONNEXT_ASSET_FOR_NONE(overrides?: CallOverrides): Promise<string>;

  TRANSFER_REQUEST_ID(overrides?: CallOverrides): Promise<BigNumber>;

  bridges(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  connext(overrides?: CallOverrides): Promise<string>;

  getSupportedRequests(overrides?: CallOverrides): Promise<BigNumber[]>;

  getZKPRequest(
    requestId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ICircuitValidator.CircuitQueryStructOutput>;

  owner(overrides?: CallOverrides): Promise<string>;

  proofs(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requestQueries(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, string] & {
      schema: BigNumber;
      slotIndex: BigNumber;
      operator: BigNumber;
      circuitId: string;
    }
  >;

  requestValidators(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  setBridge(
    domainId_: PromiseOrValue<BigNumberish>,
    bridge: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setZKPRequest(
    requestId: PromiseOrValue<BigNumberish>,
    validator: PromiseOrValue<string>,
    query: ICircuitValidator.CircuitQueryStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitZKPResponse(
    requestId: PromiseOrValue<BigNumberish>,
    inputs: PromiseOrValue<BigNumberish>[],
    a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
    b: [
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
    ],
    c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportedRequests(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  sync(
    destination: PromiseOrValue<BigNumberish>,
    relayerFee: PromiseOrValue<BigNumberish>,
    slippage: PromiseOrValue<BigNumberish>,
    sub: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verified(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  xReceive(
    transferId: PromiseOrValue<BytesLike>,
    amount: PromiseOrValue<BigNumberish>,
    asset: PromiseOrValue<string>,
    originSender: PromiseOrValue<string>,
    origin: PromiseOrValue<BigNumberish>,
    callData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CONNEXT_AMOUNT_FOR_NONE(overrides?: CallOverrides): Promise<BigNumber>;

    CONNEXT_ASSET_FOR_NONE(overrides?: CallOverrides): Promise<string>;

    TRANSFER_REQUEST_ID(overrides?: CallOverrides): Promise<BigNumber>;

    bridges(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    connext(overrides?: CallOverrides): Promise<string>;

    getSupportedRequests(overrides?: CallOverrides): Promise<BigNumber[]>;

    getZKPRequest(
      requestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ICircuitValidator.CircuitQueryStructOutput>;

    owner(overrides?: CallOverrides): Promise<string>;

    proofs(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    requestQueries(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string] & {
        schema: BigNumber;
        slotIndex: BigNumber;
        operator: BigNumber;
        circuitId: string;
      }
    >;

    requestValidators(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    setBridge(
      domainId_: PromiseOrValue<BigNumberish>,
      bridge: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setZKPRequest(
      requestId: PromiseOrValue<BigNumberish>,
      validator: PromiseOrValue<string>,
      query: ICircuitValidator.CircuitQueryStruct,
      overrides?: CallOverrides
    ): Promise<boolean>;

    submitZKPResponse(
      requestId: PromiseOrValue<BigNumberish>,
      inputs: PromiseOrValue<BigNumberish>[],
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b: [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      overrides?: CallOverrides
    ): Promise<boolean>;

    supportedRequests(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sync(
      destination: PromiseOrValue<BigNumberish>,
      relayerFee: PromiseOrValue<BigNumberish>,
      slippage: PromiseOrValue<BigNumberish>,
      sub: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    verified(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    xReceive(
      transferId: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      asset: PromiseOrValue<string>,
      originSender: PromiseOrValue<string>,
      origin: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "BridgeSet(uint32,address)"(
      domainId?: PromiseOrValue<BigNumberish> | null,
      bridge?: PromiseOrValue<string> | null
    ): BridgeSetEventFilter;
    BridgeSet(
      domainId?: PromiseOrValue<BigNumberish> | null,
      bridge?: PromiseOrValue<string> | null
    ): BridgeSetEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    CONNEXT_AMOUNT_FOR_NONE(overrides?: CallOverrides): Promise<BigNumber>;

    CONNEXT_ASSET_FOR_NONE(overrides?: CallOverrides): Promise<BigNumber>;

    TRANSFER_REQUEST_ID(overrides?: CallOverrides): Promise<BigNumber>;

    bridges(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    connext(overrides?: CallOverrides): Promise<BigNumber>;

    getSupportedRequests(overrides?: CallOverrides): Promise<BigNumber>;

    getZKPRequest(
      requestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proofs(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requestQueries(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    requestValidators(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setBridge(
      domainId_: PromiseOrValue<BigNumberish>,
      bridge: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setZKPRequest(
      requestId: PromiseOrValue<BigNumberish>,
      validator: PromiseOrValue<string>,
      query: ICircuitValidator.CircuitQueryStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    submitZKPResponse(
      requestId: PromiseOrValue<BigNumberish>,
      inputs: PromiseOrValue<BigNumberish>[],
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b: [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportedRequests(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sync(
      destination: PromiseOrValue<BigNumberish>,
      relayerFee: PromiseOrValue<BigNumberish>,
      slippage: PromiseOrValue<BigNumberish>,
      sub: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verified(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    xReceive(
      transferId: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      asset: PromiseOrValue<string>,
      originSender: PromiseOrValue<string>,
      origin: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CONNEXT_AMOUNT_FOR_NONE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CONNEXT_ASSET_FOR_NONE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TRANSFER_REQUEST_ID(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bridges(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    connext(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSupportedRequests(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getZKPRequest(
      requestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proofs(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requestQueries(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requestValidators(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setBridge(
      domainId_: PromiseOrValue<BigNumberish>,
      bridge: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setZKPRequest(
      requestId: PromiseOrValue<BigNumberish>,
      validator: PromiseOrValue<string>,
      query: ICircuitValidator.CircuitQueryStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitZKPResponse(
      requestId: PromiseOrValue<BigNumberish>,
      inputs: PromiseOrValue<BigNumberish>[],
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b: [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportedRequests(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sync(
      destination: PromiseOrValue<BigNumberish>,
      relayerFee: PromiseOrValue<BigNumberish>,
      slippage: PromiseOrValue<BigNumberish>,
      sub: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verified(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    xReceive(
      transferId: PromiseOrValue<BytesLike>,
      amount: PromiseOrValue<BigNumberish>,
      asset: PromiseOrValue<string>,
      originSender: PromiseOrValue<string>,
      origin: PromiseOrValue<BigNumberish>,
      callData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
