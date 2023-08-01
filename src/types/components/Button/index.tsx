import { MouseEventHandler } from "react";

export interface ButtonProps {
    type?: "submit";
    text: string;
    onClick?: MouseEventHandler;
}