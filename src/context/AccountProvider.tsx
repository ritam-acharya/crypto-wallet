import { useState } from "react";
import { AccountContext } from "./AccountContext";
import type { AccountInfo } from "../types/type";

export default function AccountProvider({children}: {children: React.ReactNode}) {

    const [mnemonic, setMnemonic] = useState<string>("");
    const [accounts, setAccounts] = useState<AccountInfo[]>([]);
    const [currentAccountNumber, setCurrentAccountNumber] = useState<number>(0);
    const [currentAccountDetails, setCurrentAccountDetails] = useState<AccountInfo | null>(null);
    const [password, setPassword] = useState<string>("");
    return (
        <AccountContext.Provider value={{ mnemonic, setMnemonic, accounts, setAccounts, currentAccountNumber, setCurrentAccountNumber, currentAccountDetails, setCurrentAccountDetails, password, setPassword }}>
            {children}
        </AccountContext.Provider>
    )
}