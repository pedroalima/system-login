import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

import Button from "../../components/Button";

import "./index.scss";
import { SignInInputs } from "../../types/routes/SignIn";

const schema = object({
	email: string().required("This field is required"),
	password: string().required("This field is required").min(6),
});

function SignIn() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInInputs>({resolver: yupResolver(schema)});

	const navigate = useNavigate();

	const handleLogin = (data: SignInInputs) => {
		if (data.email && data.password) {
			navigate("/home");
		}
	};

	return (
		<div className="container-fluid bg-light">
			<div className="row py-5 vh-100 justify-content-center align-items-center">
				<div className="col-3 py-5 text-center">
					<h4 className="text-uppercase text-secondary">System Login</h4>
					<form 
						className="d-flex flex-column p-3 bg-white align-items-around rounded shadow-sm"
						onSubmit={handleSubmit(handleLogin)}
					>
						<input 
							className={"form-control p-input-custom mb-3"}
							type="email"
							placeholder="E-mail"
							{...register("email")}
						/>
						<span className='text-danger font-weight-bold error'>{errors?.email?.message}</span>
						<input 
							className="form-control p-input-custom mb-3"
							type="password"
							placeholder="Password"
							{...register("password")}
						/>
						<span className='text-danger font-weight-bold error'>{errors?.password?.message}</span>
						<Button text="Enter" />
						<label>
							<Link 
								className="font-weight-bold" 
								to="/signup">Sing Up </Link>
							if you don't have account
						</label>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignIn;