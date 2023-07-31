import { MouseEventHandler } from "react";

export interface ButtonProps {
    type?: "button";
    text: string;
    onClick: MouseEventHandler;
}