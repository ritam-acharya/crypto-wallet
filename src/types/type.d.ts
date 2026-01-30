
export type EncryptedData = {
    cipherText: string,
    salt: string,
    iv: string
}

export type AccountInfo = {
  ETH_PK: string;
  ETH_SK: string;
  ETH_ADDRESS: string,
  SOL_PK: string;
  SOL_SK: string;
}


export type AccountContextType = {
  mnemonic: string;
  setMnemonic: React.Dispatch<React.SetStateAction<string>>;
  accounts: AccountInfo[];
  setAccounts: React.Dispatch<React.SetStateAction<AccountInfo[]>>;
  currentAccountNumber: number;
  setCurrentAccountNumber: React.Dispatch<React.SetStateAction<number>>;
  currentAccountDetails: AccountInfo | null;
  setCurrentAccountDetails: React.Dispatch<React.SetStateAction<AccountInfo | null>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
} | null;