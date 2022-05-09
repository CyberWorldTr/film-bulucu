import { auth } from "../firebase";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";

//create a login component with firebase login
function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	useEffect(() => {
		document.title = `Giriş Yap | Film Bulucu`;
	}, []);

	const history = useHistory();

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const user = await auth.signInWithEmailAndPassword(email,  password);
			setError(null);
			history.push("/");
		} catch (error) {
			setError(error.message);
		}
	};

	const onChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const onChangePassword = (e) => {
		setPassword(e.target.value);
	};

	return (
		<div className="login">
			<div className="loginContainer">
				<form onSubmit={onSubmit} className="loginForm">
					<h1>Giriş Yap</h1>
					{error && <p>{error}</p>}
					<h5>Email</h5>
					<input type="email" id="email" aria-describedby="emailHelp" placeholder="Email.." value={email} onChange={onChangeEmail} />
					<h5>Şifre</h5>
					<input type="password" id="password" placeholder="Şifre.." value={password} onChange={onChangePassword} />
					<button type="submit" className="loginSignInButton">
						Gönder
					</button>
				</form>
				<div className="linkToregister">
				Hesabın yok mu? <Link className="link-login" to="/register" >Hesap Aç</Link>
				</div>
			</div>
		</div>
	);
}

export default Login;
