import { ButtonProps } from "../../types/components/Button";

function Button({type="submit", onClick, text}: ButtonProps) {
	return (
		<button 
			className="btn btn-primary p-button-custom my-3 font-weight-bold"
			type={type} 
			onClick={onClick}>
			{text}
		</button>
	);
}

export default Button;