import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

import Button from "../../components/Button";

import "./index.scss";
import { SignInInputs } from "../../types/routes/SignIn";
import { useAuth } from "../../hook";

const schema = object().shape({
	email: string().required("E-mail is a required!"),
	password: string().required("Password is a required!"),
});

function SignIn() {
	const { setUser } = useAuth();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInInputs>({resolver: yupResolver(schema)});

	const handleLogin = (data: SignInInputs) => {
		if (data.email && data.password) {

			setUser("teste");

			navigate("/home");
		}
	};

	return (
		<div className="container-fluid bg-light" id="sign-in">
			<div className="row py-5 vh-100 justify-content-center align-items-center">
				<div className="col-11 col-sm-8 col-md-6 col-lg-4 col-xl-3 py-5">
					<h4 className="text-uppercase text-secondary text-center">Sign In</h4>
					<form 
						className="d-flex flex-column p-3 bg-white align-items-around gap rounded shadow-sm"
						onSubmit={handleSubmit(handleLogin)}
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
							type="password"
							placeholder="Password"
							{...register("password")}
						/>
						<span className='text-danger error'>{errors?.password?.message}</span>
						<Button text="Enter" />
						<label className="text-center">
							<Link 
								className="font-weight-bold" 
								to="/signup">Sign Up </Link>
							if you don't have account
						</label>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignIn;