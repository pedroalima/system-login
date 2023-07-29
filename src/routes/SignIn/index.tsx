import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function SignIn() {
	const { user, setUser } = useContext(AuthContext);
	console.log(user);
	return (
		<div>
			<h1>SignIn</h1>
			<h2>{user}</h2>
			<input 
				type="email" 
				name="" 
				id="" 
				onChange={(e) => setUser(e.target.value)}
			/>
		</div>
	);
}

export default SignIn;