import { ReactNode } from "react";

export type PrivateProps = {
	Item: () => ReactNode;
}

export interface AuthContextData {
    signed: string | boolean;
    user: object;
    setUser: (object: object) => void;
    signin: (email: string, password: string) => void;
    signup: (email: string, password: string) => void;
}

export interface AuthContextProps {
    children: ReactNode;
}

export type User = [] | [
    {
        email: string;
        password: string;
    }
]

