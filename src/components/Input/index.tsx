import { InputProps } from "../../types/components/Input";

export const Input = ({ type, placeholder, value, onChange }: InputProps) => {
	return (
		<input 
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

export default Input;