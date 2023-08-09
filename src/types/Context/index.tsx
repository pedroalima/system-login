import { ReactNode } from "react";

export type PrivateProps = {
	Item: () => ReactNode;
}

export interface AuthContextData {
    signed: number | boolean;
    user: object | null | undefined;
    signin: (email: string, password: string) => void;
    signup: (email: string, password: string) => void;
    logout: () => void;
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

