import { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";

import "./index.scss";

function SignIn() {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		if (email && password) {
			navigate("/home");
		}
	};

	return (
		<div className="container-fluid w-100 vh-100 bg-light">
			<div className="row py-5 justify-content-center">
				<div className="col-3 py-5 text-center">
					<h4 className="text-uppercase text-secondary">System Login</h4>
					<form className="d-flex flex-column p-3 bg-white align-items-around rounded shadow-sm">
						<Input 
							type="email"
							placeholder="E-mail"
							value={email}
							onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
						/>
						<Input 
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
						/>
						<Button 
							text="Enter"
							onClick={handleLogin}
						/>
						<label>
							<Link className="font-weight-bold" to="/signup">Sing Up </Link>
							if you don't have account
						</label>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignIn;