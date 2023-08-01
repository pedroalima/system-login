import { FormEventHandler } from "react";

export interface InputProps {
    type: string;
    placeholder: string;
    value?: string;
    onChange?: FormEventHandler;
}