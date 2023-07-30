import { ButtonProps } from "../../types/components/Button";

function Button({type="button", onClick, text}: ButtonProps) {
	return (
		<button type={type} onClick={onClick}>{text}</button>
	);
}

export default Button;