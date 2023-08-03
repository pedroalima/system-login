import Button from "../../components/Button";

function Home() {
	return (
		<div className="container-fluid bg-light">
			<div className="row py-5 vh-100 justify-content-center align-items-center">
				<div className="col-4 py-5 text-center">
					<h4 className="text-uppercase text-secondary">Home</h4>
					<Button text="Logout" />
				</div>
			</div>
		</div>
	);
}

export default Home;