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
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface GroDistributorInterface extends utils.Interface {
  functions: {
    'BURNER()': FunctionFragment;
    'COMMUNITY_QUOTA()': FunctionFragment;
    'COMMUNITY_VESTER()': FunctionFragment;
    'DAO_QUOTA()': FunctionFragment;
    'DAO_VESTER()': FunctionFragment;
    'DEFAULT_FACTOR()': FunctionFragment;
    'INVESTOR_QUOTA()': FunctionFragment;
    'INVESTOR_VESTER()': FunctionFragment;
    'TEAM_QUOTA()': FunctionFragment;
    'TEAM_VESTER()': FunctionFragment;
    'burn(uint256)': FunctionFragment;
    'govToken()': FunctionFragment;
    'mint(address,uint256)': FunctionFragment;
    'mintDao(address,uint256,bool)': FunctionFragment;
    'mintingPools(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'BURNER'
      | 'COMMUNITY_QUOTA'
      | 'COMMUNITY_VESTER'
      | 'DAO_QUOTA'
      | 'DAO_VESTER'
      | 'DEFAULT_FACTOR'
      | 'INVESTOR_QUOTA'
      | 'INVESTOR_VESTER'
      | 'TEAM_QUOTA'
      | 'TEAM_VESTER'
      | 'burn'
      | 'govToken'
      | 'mint'
      | 'mintDao'
      | 'mintingPools',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'BURNER', values?: undefined): string;
  encodeFunctionData(functionFragment: 'COMMUNITY_QUOTA', values?: undefined): string;
  encodeFunctionData(functionFragment: 'COMMUNITY_VESTER', values?: undefined): string;
  encodeFunctionData(functionFragment: 'DAO_QUOTA', values?: undefined): string;
  encodeFunctionData(functionFragment: 'DAO_VESTER', values?: undefined): string;
  encodeFunctionData(functionFragment: 'DEFAULT_FACTOR', values?: undefined): string;
  encodeFunctionData(functionFragment: 'INVESTOR_QUOTA', values?: undefined): string;
  encodeFunctionData(functionFragment: 'INVESTOR_VESTER', values?: undefined): string;
  encodeFunctionData(functionFragment: 'TEAM_QUOTA', values?: undefined): string;
  encodeFunctionData(functionFragment: 'TEAM_VESTER', values?: undefined): string;
  encodeFunctionData(functionFragment: 'burn', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'govToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'mint', values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: 'mintDao',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>],
  ): string;
  encodeFunctionData(functionFragment: 'mintingPools', values: [PromiseOrValue<string>]): string;

  decodeFunctionResult(functionFragment: 'BURNER', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'COMMUNITY_QUOTA', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'COMMUNITY_VESTER', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'DAO_QUOTA', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'DAO_VESTER', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'DEFAULT_FACTOR', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'INVESTOR_QUOTA', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'INVESTOR_VESTER', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'TEAM_QUOTA', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'TEAM_VESTER', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burn', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'govToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mintDao', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mintingPools', data: BytesLike): Result;

  events: {};
}

export interface GroDistributor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GroDistributorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BURNER(overrides?: CallOverrides): Promise<[string]>;

    COMMUNITY_QUOTA(overrides?: CallOverrides): Promise<[BigNumber]>;

    COMMUNITY_VESTER(overrides?: CallOverrides): Promise<[string]>;

    DAO_QUOTA(overrides?: CallOverrides): Promise<[BigNumber]>;

    DAO_VESTER(overrides?: CallOverrides): Promise<[string]>;

    DEFAULT_FACTOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    INVESTOR_QUOTA(overrides?: CallOverrides): Promise<[BigNumber]>;

    INVESTOR_VESTER(overrides?: CallOverrides): Promise<[string]>;

    TEAM_QUOTA(overrides?: CallOverrides): Promise<[BigNumber]>;

    TEAM_VESTER(overrides?: CallOverrides): Promise<[string]>;

    burn(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    govToken(overrides?: CallOverrides): Promise<[string]>;

    mint(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    mintDao(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      community: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    mintingPools(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  BURNER(overrides?: CallOverrides): Promise<string>;

  COMMUNITY_QUOTA(overrides?: CallOverrides): Promise<BigNumber>;

  COMMUNITY_VESTER(overrides?: CallOverrides): Promise<string>;

  DAO_QUOTA(overrides?: CallOverrides): Promise<BigNumber>;

  DAO_VESTER(overrides?: CallOverrides): Promise<string>;

  DEFAULT_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

  INVESTOR_QUOTA(overrides?: CallOverrides): Promise<BigNumber>;

  INVESTOR_VESTER(overrides?: CallOverrides): Promise<string>;

  TEAM_QUOTA(overrides?: CallOverrides): Promise<BigNumber>;

  TEAM_VESTER(overrides?: CallOverrides): Promise<string>;

  burn(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  govToken(overrides?: CallOverrides): Promise<string>;

  mint(
    account: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  mintDao(
    account: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    community: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  mintingPools(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    BURNER(overrides?: CallOverrides): Promise<string>;

    COMMUNITY_QUOTA(overrides?: CallOverrides): Promise<BigNumber>;

    COMMUNITY_VESTER(overrides?: CallOverrides): Promise<string>;

    DAO_QUOTA(overrides?: CallOverrides): Promise<BigNumber>;

    DAO_VESTER(overrides?: CallOverrides): Promise<string>;

    DEFAULT_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

    INVESTOR_QUOTA(overrides?: CallOverrides): Promise<BigNumber>;

    INVESTOR_VESTER(overrides?: CallOverrides): Promise<string>;

    TEAM_QUOTA(overrides?: CallOverrides): Promise<BigNumber>;

    TEAM_VESTER(overrides?: CallOverrides): Promise<string>;

    burn(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    govToken(overrides?: CallOverrides): Promise<string>;

    mint(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    mintDao(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      community: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<void>;

    mintingPools(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    BURNER(overrides?: CallOverrides): Promise<BigNumber>;

    COMMUNITY_QUOTA(overrides?: CallOverrides): Promise<BigNumber>;

    COMMUNITY_VESTER(overrides?: CallOverrides): Promise<BigNumber>;

    DAO_QUOTA(overrides?: CallOverrides): Promise<BigNumber>;

    DAO_VESTER(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

    INVESTOR_QUOTA(overrides?: CallOverrides): Promise<BigNumber>;

    INVESTOR_VESTER(overrides?: CallOverrides): Promise<BigNumber>;

    TEAM_QUOTA(overrides?: CallOverrides): Promise<BigNumber>;

    TEAM_VESTER(overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    govToken(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    mintDao(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      community: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    mintingPools(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BURNER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    COMMUNITY_QUOTA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    COMMUNITY_VESTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DAO_QUOTA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DAO_VESTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DEFAULT_FACTOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    INVESTOR_QUOTA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    INVESTOR_VESTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TEAM_QUOTA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TEAM_VESTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burn(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    govToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    mintDao(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      community: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    mintingPools(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
