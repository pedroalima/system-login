import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import Button from "../../components/Button";


function Home() {
	const navigate = useNavigate();
	const { setUser } = useAuth();

	const handleLogout = () => {
		setUser({});
		navigate("/");
	};
	
	return (
		<div className="container-fluid bg-light">
			<div className="row py-5 vh-100 justify-content-center align-items-center">
				<div className="col-11 col-sm-8 col-md-6 col-lg-4 col-xl-3 py-5 text-center">
					<h4 className="text-uppercase text-secondary">Home</h4>
					<Button text="Logout" onClick={handleLogout} />
				</div>
			</div>
		</div>
	);
}

export default Home;