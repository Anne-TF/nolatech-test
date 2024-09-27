import {createContext, ReactNode, useMemo} from 'react';
import {IUser} from '@modules/Auth/infrastructure/interfaces/user.interface.ts';
import {useLocalStorage} from '@common/hooks';

export type AuthContextType = {
    user: IUser | null;
    login: (user: IUser) => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
    user: null,
    login: () => {},
    logout: () => {},
});

export const AuthContextProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useLocalStorage('user', null);

    const login = (user: IUser) => {
        setUser(user);
    };

    const logout = () => {
        setUser(null);
    };

    const value = useMemo(
        () => ({
            user,
            login,
            logout,
        }),
        [user]
    );


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
