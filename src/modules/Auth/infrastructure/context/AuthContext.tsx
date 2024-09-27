import {createContext, ReactNode, useState} from 'react';
import {IUser} from '@modules/Auth/infrastructure/interfaces/user.interface.ts';

export type AuthContextType = {
    user: IUser | null;
    setUser: (user: IUser | null) => void;
};

export const AuthContext = createContext<AuthContextType>({
    user: null,
    setUser: () => {}
});

export const AuthContextProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<IUser | null>(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}
