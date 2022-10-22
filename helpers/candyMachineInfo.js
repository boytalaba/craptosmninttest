export const candyMachineAddress = "0x65a3454ed3493925a6ee365cde796ee3608928f63b9ab39c38074b7ad7e27a54";
export const collectionName = "CRAPtos"; // Case sensitive!
export const collectionCoverUrl = "https://cloudflare-ipfs.com/ipfs/QmYVMMY3BPahQz4sXWLXck4RiUnbT9amn8AcVPxGUBA7MB";
export const mode = "mainnet"; // "dev" or "test" or "mainnet"

export let NODE_URL;
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}