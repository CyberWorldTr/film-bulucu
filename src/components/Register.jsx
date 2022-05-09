//imports
import React, { useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./Register.css";

function Register(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const history = useHistory();

	useEffect(() => {
		document.title = `Kayıt Ol | Film Bulucu`;
	}, []);

	//create a firebase user with email and password
	const register = (e) => {
		e.preventDefault();
		setLoading(true);

		auth.createUserWithEmailAndPassword(email, password)
			.then((res) => {
				const user = auth.currentUser;
				user.updateProfile({
					displayName: `${firstName} ${lastName}`,
				})
					.then(() => {
						setLoading(false);
						history.push("/");
					})
					.catch((err) => {
						setLoading(false);
						setError(err.message);
					});
			})
			.catch((err) => {
				setLoading(false);
				setError(err.message);
			});
	};

	return (
		<div className="login">
			<div className="loginContainer2">
				<form onSubmit={register} className="loginForm">
					<h1>Kayıt Ol</h1>
					<p>Film bulucu hesabınızı hemen oluşturun!</p>
					<h5>İsim</h5>
					<input type="text" placeholder="İsim" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
					<h5>Soyisim</h5>
					<input type="text" placeholder="Soyisim" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
					<h5>E-Mail</h5>
					<input type="email" placeholder="Email Addresi" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
					<h5>Şifre</h5>
					<input type="password" placeholder="Şifre.." name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					<button type="submit" className="loginSignInButton">
						Gönder
					</button>
				</form>
				{error && <p>{error}</p>}
				<div className="linkToregister">
					Hesabınız var mı?{" "}
					<Link className="link-login" to="/login">
						Giriş Yap
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Register;
