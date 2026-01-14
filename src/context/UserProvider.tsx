import { UserContext } from "./UserContext";

export default function UserProvider({children}: {children: React.ReactNode}) {
    return (
        <UserContext.Provider value={null}>
            {children}
        </UserContext.Provider>
    )
}