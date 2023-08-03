import { useForm } from "react-hook-form";
import { SignUpInputs } from "../../types/routes/SingUp";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, ref, string } from "yup";

import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hook";

const schema = object().shape({
	email: string()
		.required("E-mail is a required!"),
	confirmEmail: string()
		.required("E-mail needs to be confirmed!")
		.oneOf([ref("email")], "E-mail needs to be confirmed correctly!"),
	password: string()
		.required("Password is a required!")
		.min(6),
	confirmPassword: string()
		.required("Password needs to be confirmed!")
		.oneOf([ref("password")], "The passwords need to be the same!"),
});

function SignUp() {
	const { signup } = useAuth();
	const navigate = useNavigate();

	const { 
		register, 
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpInputs>({resolver: yupResolver(schema)});

	const handleUser = (data: SignUpInputs) => {
		signup(data.email, data.password);

		navigate("/");
	};

	return (
		<div className="container-fluid bg-light" id="sign-in">
			<div className="row py-5 vh-100 justify-content-center align-items-center">
				<div className="col-3 py-5">
					<h4 className="text-uppercase text-secondary text-center">System Login</h4>
					<form 
						className="d-flex flex-column p-3 bg-white align-items-around gap rounded shadow-sm"
						onSubmit={handleSubmit(handleUser)}
					>
						<input 
							className={"form-control p-input-custom"}
							type="email"
							placeholder="E-mail"
							{...register("email")}
						/>
						<span className='text-danger error'>{errors?.email?.message}</span>
						<input 
							className="form-control p-input-custom"
							type="email"
							placeholder="Confirm your e-mail"
							{...register("confirmEmail")}
						/>
						<span className='text-danger error'>{errors?.confirmEmail?.message}</span>
						<input 
							className="form-control p-input-custom"
							type="password"
							placeholder="Password"
							{...register("password")}
						/>
						<span className='text-danger error'>{errors?.password?.message}</span>
						<input 
							className="form-control p-input-custom"
							type="password"
							placeholder="Confirm your password"
							{...register("confirmPassword")}
						/>
						<span className='text-danger error'>{errors?.confirmPassword?.message}</span>
						<Button text="Sign Up" />
						<label className="text-center">
							<Link 
								className="font-weight-bold" 
								to="/signin">Sign In </Link>
							if you already have account
						</label>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignUp;