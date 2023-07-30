import { InputProps } from "../../types/components/Input";

export const Input = ({ text, placeholder, value, onChange }: InputProps) => {
	return (
		<input 
			type={text}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

export default Input;