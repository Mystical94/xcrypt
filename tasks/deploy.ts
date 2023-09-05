import '@nomiclabs/hardhat-waffle';
import { task } from 'hardhat/config';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

task('deploy', 'Deploy StealthAddress contract').setAction(
  async (_, hre: HardhatRuntimeEnvironment): Promise<void> => {
    const StealthAddress = await hre.ethers.getContractFactory('StealthAddress');
    const stealthAddress = await StealthAddress.deploy();

    await stealthAddress.deployed();

    console.log('StealthAddress deployed to:', stealthAddress.address);
  }
);