import {
    Connection,
    PublicKey,
  } from "@solana/web3.js";
  import DLMM from '@meteora-ag/dlmm';
  
  const connection = new Connection("https://api.devnet.solana.com", "finalized");
  const devnetPool = new PublicKey("3W2HKgUa96Z69zzG3LK1g8KdcRAWzAttiLiHfYnKuPw5");
  
  async function getActiveBin(dlmmPool: any) {  
    let activeBin = await dlmmPool.getActiveBin();
    console.log("🚀 ~ activeBin:", activeBin);
  }
  
  async function main() {
    const dlmmPool = await DLMM.create(connection, devnetPool, {
      cluster: "devnet",
    });
    await getActiveBin(dlmmPool);
  }
  
  main();
  