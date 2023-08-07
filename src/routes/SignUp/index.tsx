import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, ref, string } from "yup";

import Button from "../../components/Button";
import { SignUpInputs } from "../../types/routes/SingUp";
import { useAuth } from "../../hook/useAuth";


const schema = object().shape({
	email: string()
		.required("E-mail is a required!")
		.matches(/^[\w\d.]+@[\w]+\.[\w]{3}(\.[\w]{2})?$/, "Invalid e-mail"),
	confirmEmail: string()
		.required("E-mail needs to be confirmed!")
		.oneOf([ref("email")], "E-mail needs to be confirmed correctly!"),
	password: string()
		.required("Password is a required!")
		.min(8)
		.max(20),
	confirmPassword: string()
		.required("Password needs to be confirmed!")
		.oneOf([ref("password")], "The passwords need to be the same!"),
});

function SignUp() {
	const { signup } = useAuth();
	const navigate = useNavigate();
	const [ statusEmail, setStatusEmail ] = useState<boolean | null>(null);
	const [ messageEmail, setMessageEmail] = useState("");
	const { 
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<SignUpInputs>({resolver: yupResolver(schema)});

	const handleUser = (data: SignUpInputs) => {
		const existingEmail: string | void = signup(data.email, data.password);

		if (typeof existingEmail === "string") {
			setStatusEmail(true);
			setMessageEmail(existingEmail);
		} else {
			setStatusEmail(false);
			setMessageEmail("User successfully registered!");
			reset();
			setTimeout(() => navigate("/"), 2000);
		}
	};
	
	return (
		<div className="container-fluid bg-light" id="sign-in">
			<div className="row py-5 vh-100 justify-content-center align-items-center">
				<div className="col-11 col-sm-8 col-md-6 col-lg-4 col-xl-3 py-5">
					<h4 className="text-uppercase text-secondary text-center">Sign Up</h4>
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
						{statusEmail === null ? 
							<div></div> : 
							statusEmail ?
								<div className="alert alert-danger text-center" role="alert">{messageEmail}</div> :
								<div className="alert alert-success text-center" role="alert">{messageEmail}</div>
						}
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