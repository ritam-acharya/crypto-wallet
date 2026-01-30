import { mnemonicToSeedSync } from "bip39";
import useAccount from "../context/AccountContext";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import { HDNodeWallet } from "ethers";
import bs58 from "bs58";

export function useGenerateAccount(mnemonic: string[]) {
    const mnemonicPhrase = mnemonic.join(" ");
    const seed = mnemonicToSeedSync(mnemonicPhrase);
    const { accounts, setAccounts, setCurrentAccountDetails, setCurrentAccountNumber } = useAccount()!;
    const solanaKeyPair = createSolanaAccount(seed, accounts.length);
    const ethereumKeyPair = createEthereumAccount(seed, accounts.length);
    setCurrentAccountNumber(accounts.length + 1);
    const currentAccountInfo = {
        ETH_PK: ethereumKeyPair.publicKey,
        ETH_SK: ethereumKeyPair.privateKey,
        ETH_ADDRESS: ethereumKeyPair.address,
        SOL_PK: solanaKeyPair.publicKey,
        SOL_SK: solanaKeyPair.privateKey
    };
    setCurrentAccountDetails(currentAccountInfo);
    setAccounts(prev => (
        [...prev, currentAccountInfo]
    ));
}

export function createSolanaAccount(seed: Buffer<ArrayBufferLike>, index: number) {
    const path = `m/44'/501'/${index}'/0'`;
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const keyPair = nacl.sign.keyPair.fromSeed(new Uint8Array(derivedSeed));
    const privateKey = bs58.encode(keyPair.secretKey);
    const publicKey = bs58.encode(keyPair.publicKey);
    return {
        privateKey,
        publicKey
    }
}

export function createEthereumAccount(seed: Buffer<ArrayBufferLike>, index: number) {
    const hdWallet = HDNodeWallet.fromSeed(seed);
    const derivation = `m/44'/60'/0'/0/${index}`;
    const wallet = hdWallet.derivePath(derivation);
    return {
        publicKey: wallet.publicKey,
        privateKey: wallet.privateKey,
        address: wallet.address
    }
}