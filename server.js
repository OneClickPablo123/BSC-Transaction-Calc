import bscscan, { account } from 'bsc-scan'


//bscscan.setUrl('https://testnet.bscscan.com')
bscscan.default.setApiKey('API_KEY')

console.log(bscscan);

const start = async () => {
  try {
    const transactions = await account.getTransactions('0x41cf3e9534156405a133cda545af9ff0e586500a');

    console.log("Transaktionen: " + transactions);

  } catch (err) {
    console.log(err)
  }
}

start()

