import { InputProps } from "../../types/components/Input";

export const Input = ({ type, placeholder, value, onChange }: InputProps) => {
	return (
		<input 
			className="form-control p-input-custom mb-3"
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

export default Input;