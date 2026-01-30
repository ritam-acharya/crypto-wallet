import { createContext, useContext } from "react";
import type { AccountContextType } from "../types/type";


export const AccountContext = createContext<AccountContextType>(null);

export default function useAccount() {
  const context = useContext(AccountContext);
  return context;
}