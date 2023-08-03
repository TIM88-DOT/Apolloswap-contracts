import { ethers } from "hardhat";

async function main() {
  const feeTo = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"

  const apolloswapFactory = await ethers.deployContract("ApolloswapFactory", [feeTo]);

  const apolloswapFactoryContract = await apolloswapFactory.waitForDeployment();
  const initPairHash = await apolloswapFactoryContract.PAIR_HASH();
  console.log(
    `Apolloswap Factory contract with fee to address ${feeTo} and init hash ${initPairHash} deployed to ${apolloswapFactory.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});