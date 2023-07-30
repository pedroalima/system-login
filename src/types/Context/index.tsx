import { ReactNode } from "react";

export type PrivateProps = {
	Item: () => ReactNode;
}

export interface AuthContextProps {
    children: ReactNode
}

export interface AuthContextData {
    name: string
}