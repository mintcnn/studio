import { Inject } from '@nestjs/common';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { getLabelFromToken } from '~app-toolkit/helpers/presentation/image.present';
import { MetaType } from '~position/position.interface';
import { ContractPositionTemplatePositionFetcher } from '~position/template/contract-position.template.position-fetcher';
import {
  DefaultContractPositionDefinition,
  GetDisplayPropsParams,
  GetTokenBalancesParams,
  GetTokenDefinitionsParams,
} from '~position/template/contract-position.template.types';

import { UmamiFinanceContractFactory, UmamiFinanceMarinate } from '../contracts';

@PositionTemplate()
export class ArbitrumUmamiFinanceMarinateContractPositionFetcher extends ContractPositionTemplatePositionFetcher<UmamiFinanceMarinate> {
  groupLabel = 'Marinating UMAMI';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(UmamiFinanceContractFactory) protected readonly contractFactory: UmamiFinanceContractFactory,
  ) {
    super(appToolkit);
  }

  getContract(address: string): UmamiFinanceMarinate {
    return this.contractFactory.umamiFinanceMarinate({ address, network: this.network });
  }

  async getDefinitions(): Promise<DefaultContractPositionDefinition[]> {
    return [{ address: '0x2adabd6e8ce3e82f52d9998a7f64a90d294a92a4' }];
  }

  async getTokenDefinitions(_params: GetTokenDefinitionsParams<UmamiFinanceMarinate>) {
    return [
      { metaType: MetaType.SUPPLIED, address: '0x2adabd6e8ce3e82f52d9998a7f64a90d294a92a4' },
      { metaType: MetaType.CLAIMABLE, address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1' },
    ];
  }

  async getLabel({ contractPosition }: GetDisplayPropsParams<UmamiFinanceMarinate>) {
    return `${getLabelFromToken(contractPosition.tokens[0])}`;
  }

  async getTokenBalancesPerPosition({
    address,
    contractPosition,
    contract,
  }: GetTokenBalancesParams<UmamiFinanceMarinate>) {
    const rewardToken = contractPosition.tokens[1];

    const [stakedBalanceRaw, rewardBalanceRaw] = await Promise.all([
      contract.balanceOf(address),
      contract.getAvailableTokenRewards(address, rewardToken.address),
    ]);

    return [stakedBalanceRaw, rewardBalanceRaw];
  }
}
