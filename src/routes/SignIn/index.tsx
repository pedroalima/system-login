import { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";

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
		<div className="container">
			<div className="row">
				<div className="col-4">
					<form className="d-flex flex-column">
						<h1>System Login</h1>
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
							<Link to="/signup">Sing Up</Link>
							if you don't have account
						</label>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignIn;