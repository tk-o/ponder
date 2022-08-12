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
} from "./common";

export declare namespace EthPlaysV0 {
  export type EthPlaysV0ConfigStruct = {
    isActive: PromiseOrValue<boolean>;
    alignmentDecayRate: PromiseOrValue<BigNumberish>;
    alignmentVoteCooldown: PromiseOrValue<BigNumberish>;
    chaosVoteReward: PromiseOrValue<BigNumberish>;
    orderDuration: PromiseOrValue<BigNumberish>;
    chaosInputRewardCooldown: PromiseOrValue<BigNumberish>;
    chaosInputReward: PromiseOrValue<BigNumberish>;
    orderInputReward: PromiseOrValue<BigNumberish>;
    chatCost: PromiseOrValue<BigNumberish>;
    rareCandyCost: PromiseOrValue<BigNumberish>;
    controlAuctionDuration: PromiseOrValue<BigNumberish>;
    controlDuration: PromiseOrValue<BigNumberish>;
  };

  export type EthPlaysV0ConfigStructOutput = [
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    isActive: boolean;
    alignmentDecayRate: BigNumber;
    alignmentVoteCooldown: BigNumber;
    chaosVoteReward: BigNumber;
    orderDuration: BigNumber;
    chaosInputRewardCooldown: BigNumber;
    chaosInputReward: BigNumber;
    orderInputReward: BigNumber;
    chatCost: BigNumber;
    rareCandyCost: BigNumber;
    controlAuctionDuration: BigNumber;
    controlDuration: BigNumber;
  };
}

export interface EthPlaysV0Interface extends utils.Interface {
  functions: {
    "alignment()": FunctionFragment;
    "controlAddress()": FunctionFragment;
    "controlAuctionEndTimestamp()": FunctionFragment;
    "controlAuctionStartTimestamp()": FunctionFragment;
    "endControlAuction()": FunctionFragment;
    "getConfig()": FunctionFragment;
    "inputIndex()": FunctionFragment;
    "owner()": FunctionFragment;
    "poke()": FunctionFragment;
    "registryReceiver()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setConfig((bool,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
    "submitAlignmentVote(bool)": FunctionFragment;
    "submitButtonInput(uint256)": FunctionFragment;
    "submitChat(string)": FunctionFragment;
    "submitControlBid(uint256)": FunctionFragment;
    "submitRareCandies(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "alignment"
      | "controlAddress"
      | "controlAuctionEndTimestamp"
      | "controlAuctionStartTimestamp"
      | "endControlAuction"
      | "getConfig"
      | "inputIndex"
      | "owner"
      | "poke"
      | "registryReceiver"
      | "renounceOwnership"
      | "setConfig"
      | "submitAlignmentVote"
      | "submitButtonInput"
      | "submitChat"
      | "submitControlBid"
      | "submitRareCandies"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "alignment", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "controlAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "controlAuctionEndTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "controlAuctionStartTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "endControlAuction",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getConfig", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "inputIndex",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "poke", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registryReceiver",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setConfig",
    values: [EthPlaysV0.EthPlaysV0ConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "submitAlignmentVote",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "submitButtonInput",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "submitChat",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "submitControlBid",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "submitRareCandies",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "alignment", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "controlAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "controlAuctionEndTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "controlAuctionStartTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "endControlAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "inputIndex", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poke", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registryReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "submitAlignmentVote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitButtonInput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "submitChat", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "submitControlBid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitRareCandies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AlignmentVote(address,bool,int256)": EventFragment;
    "ButtonInput(uint256,address,uint256)": EventFragment;
    "Chat(address,string)": EventFragment;
    "Control(address)": EventFragment;
    "InputVote(uint256,address,uint256)": EventFragment;
    "NewControlBid(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RareCandy(address,uint256)": EventFragment;
    "SetConfig(tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AlignmentVote"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ButtonInput"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Chat"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Control"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InputVote"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewControlBid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RareCandy"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetConfig"): EventFragment;
}

export interface AlignmentVoteEventObject {
  from: string;
  vote: boolean;
  alignment: BigNumber;
}
export type AlignmentVoteEvent = TypedEvent<
  [string, boolean, BigNumber],
  AlignmentVoteEventObject
>;

export type AlignmentVoteEventFilter = TypedEventFilter<AlignmentVoteEvent>;

export interface ButtonInputEventObject {
  inputIndex: BigNumber;
  from: string;
  buttonIndex: BigNumber;
}
export type ButtonInputEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  ButtonInputEventObject
>;

export type ButtonInputEventFilter = TypedEventFilter<ButtonInputEvent>;

export interface ChatEventObject {
  from: string;
  message: string;
}
export type ChatEvent = TypedEvent<[string, string], ChatEventObject>;

export type ChatEventFilter = TypedEventFilter<ChatEvent>;

export interface ControlEventObject {
  from: string;
}
export type ControlEvent = TypedEvent<[string], ControlEventObject>;

export type ControlEventFilter = TypedEventFilter<ControlEvent>;

export interface InputVoteEventObject {
  inputIndex: BigNumber;
  from: string;
  buttonIndex: BigNumber;
}
export type InputVoteEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  InputVoteEventObject
>;

export type InputVoteEventFilter = TypedEventFilter<InputVoteEvent>;

export interface NewControlBidEventObject {
  from: string;
  amount: BigNumber;
}
export type NewControlBidEvent = TypedEvent<
  [string, BigNumber],
  NewControlBidEventObject
>;

export type NewControlBidEventFilter = TypedEventFilter<NewControlBidEvent>;

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

export interface RareCandyEventObject {
  from: string;
  count: BigNumber;
}
export type RareCandyEvent = TypedEvent<
  [string, BigNumber],
  RareCandyEventObject
>;

export type RareCandyEventFilter = TypedEventFilter<RareCandyEvent>;

export interface SetConfigEventObject {
  config: EthPlaysV0.EthPlaysV0ConfigStructOutput;
}
export type SetConfigEvent = TypedEvent<
  [EthPlaysV0.EthPlaysV0ConfigStructOutput],
  SetConfigEventObject
>;

export type SetConfigEventFilter = TypedEventFilter<SetConfigEvent>;

export interface EthPlaysV0 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EthPlaysV0Interface;

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
    alignment(overrides?: CallOverrides): Promise<[BigNumber]>;

    controlAddress(overrides?: CallOverrides): Promise<[string]>;

    controlAuctionEndTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    controlAuctionStartTimestamp(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    endControlAuction(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getConfig(
      overrides?: CallOverrides
    ): Promise<
      [EthPlaysV0.EthPlaysV0ConfigStructOutput] & {
        _config: EthPlaysV0.EthPlaysV0ConfigStructOutput;
      }
    >;

    inputIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    poke(overrides?: CallOverrides): Promise<[string]>;

    registryReceiver(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setConfig(
      _config: EthPlaysV0.EthPlaysV0ConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitAlignmentVote(
      _alignmentVote: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitButtonInput(
      buttonIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitChat(
      message: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitControlBid(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitRareCandies(
      count: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  alignment(overrides?: CallOverrides): Promise<BigNumber>;

  controlAddress(overrides?: CallOverrides): Promise<string>;

  controlAuctionEndTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  controlAuctionStartTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  endControlAuction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getConfig(
    overrides?: CallOverrides
  ): Promise<EthPlaysV0.EthPlaysV0ConfigStructOutput>;

  inputIndex(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  poke(overrides?: CallOverrides): Promise<string>;

  registryReceiver(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setConfig(
    _config: EthPlaysV0.EthPlaysV0ConfigStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitAlignmentVote(
    _alignmentVote: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitButtonInput(
    buttonIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitChat(
    message: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitControlBid(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitRareCandies(
    count: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    alignment(overrides?: CallOverrides): Promise<BigNumber>;

    controlAddress(overrides?: CallOverrides): Promise<string>;

    controlAuctionEndTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    controlAuctionStartTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    endControlAuction(overrides?: CallOverrides): Promise<void>;

    getConfig(
      overrides?: CallOverrides
    ): Promise<EthPlaysV0.EthPlaysV0ConfigStructOutput>;

    inputIndex(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    poke(overrides?: CallOverrides): Promise<string>;

    registryReceiver(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setConfig(
      _config: EthPlaysV0.EthPlaysV0ConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    submitAlignmentVote(
      _alignmentVote: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    submitButtonInput(
      buttonIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    submitChat(
      message: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    submitControlBid(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    submitRareCandies(
      count: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AlignmentVote(address,bool,int256)"(
      from?: null,
      vote?: null,
      alignment?: null
    ): AlignmentVoteEventFilter;
    AlignmentVote(
      from?: null,
      vote?: null,
      alignment?: null
    ): AlignmentVoteEventFilter;

    "ButtonInput(uint256,address,uint256)"(
      inputIndex?: null,
      from?: null,
      buttonIndex?: null
    ): ButtonInputEventFilter;
    ButtonInput(
      inputIndex?: null,
      from?: null,
      buttonIndex?: null
    ): ButtonInputEventFilter;

    "Chat(address,string)"(from?: null, message?: null): ChatEventFilter;
    Chat(from?: null, message?: null): ChatEventFilter;

    "Control(address)"(from?: null): ControlEventFilter;
    Control(from?: null): ControlEventFilter;

    "InputVote(uint256,address,uint256)"(
      inputIndex?: null,
      from?: null,
      buttonIndex?: null
    ): InputVoteEventFilter;
    InputVote(
      inputIndex?: null,
      from?: null,
      buttonIndex?: null
    ): InputVoteEventFilter;

    "NewControlBid(address,uint256)"(
      from?: null,
      amount?: null
    ): NewControlBidEventFilter;
    NewControlBid(from?: null, amount?: null): NewControlBidEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "RareCandy(address,uint256)"(
      from?: null,
      count?: null
    ): RareCandyEventFilter;
    RareCandy(from?: null, count?: null): RareCandyEventFilter;

    "SetConfig(tuple)"(config?: null): SetConfigEventFilter;
    SetConfig(config?: null): SetConfigEventFilter;
  };

  estimateGas: {
    alignment(overrides?: CallOverrides): Promise<BigNumber>;

    controlAddress(overrides?: CallOverrides): Promise<BigNumber>;

    controlAuctionEndTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    controlAuctionStartTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    endControlAuction(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getConfig(overrides?: CallOverrides): Promise<BigNumber>;

    inputIndex(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    poke(overrides?: CallOverrides): Promise<BigNumber>;

    registryReceiver(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setConfig(
      _config: EthPlaysV0.EthPlaysV0ConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    submitAlignmentVote(
      _alignmentVote: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    submitButtonInput(
      buttonIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    submitChat(
      message: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    submitControlBid(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    submitRareCandies(
      count: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    alignment(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    controlAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    controlAuctionEndTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    controlAuctionStartTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    endControlAuction(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    inputIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poke(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registryReceiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setConfig(
      _config: EthPlaysV0.EthPlaysV0ConfigStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitAlignmentVote(
      _alignmentVote: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitButtonInput(
      buttonIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitChat(
      message: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitControlBid(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitRareCandies(
      count: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
