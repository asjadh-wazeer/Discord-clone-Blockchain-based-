const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Dappcord", function () {

  let deployer, user
  let dappcord

  const NAME = "Dappcord";
  const SYMBOL = "DC";
  beforeEach(async () => {

    //Setup different accounts
    [deployer, user] = await ethers.getSigners();


      const Dappcord = await ethers.getContractFactory("Dappcord")
      dappcord = await Dappcord.deploy(NAME, SYMBOL)

  })


  describe("Deployment", function () {
    // it("Sets the name & symbol", async function () {
    //   const Dappcord = await ethers.getContractFactory("Dappcord")
    //   const dappcord = await Dappcord.deploy("Dappcord", "DC")

    //   //Fetch name
    //   let result = await dappcord.name();
    //   //Check name
    //   expect(result).to.equal("Dappcord")

    //   //Fetch name
    //   let result2 = await dappcord.symbol();
    //   //Check name
    //   expect(result2).to.equal("DC")
    // });

    it("Sets the name", async () => {
      // const Dappcord = await ethers.getContractFactory("Dappcord");
      // const dappcord = await Dappcord.deploy("Dappcord", "DC");

      const result = await dappcord.name();
      expect(result).to.equal(NAME);
    });

    it("Sets the symbol", async () => {
      // const Dappcord = await ethers.getContractFactory("Dappcord");
      // const dappcord = await Dappcord.deploy("Dappcord", "DC");

      const result = await dappcord.symbol();
      expect(result).to.equal(SYMBOL);
    });

    it("Sets the owner", async () => {
      const result = await dappcord.owner()
      expect(result).to.equal(deployer.address) //deployer returns an object
    })
  });
});
