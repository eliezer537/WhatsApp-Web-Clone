import { useHistory } from 'react-router-dom';

import chatImg from '../../assets/chat.svg';
import logoImg from '../../assets/logo.svg';
import googleIconImg from '../../assets/google-icon.svg';

import './styles.scss';

export function Authentication() {
	const history = useHistory();

	function navigateToHome() {
		history.push('/home');
	}
	return (
		<div className='container'>
			<div className='figure-content'>
				<img src={chatImg} alt='ilustração de chat' />
				<p>
					The most popular smartphone messaging service WhatsApp is now able to
					communicate with friends from their devices.
				</p>
			</div>
			<div className='divider'></div>
			<div className='form-content'>
				<img src={logoImg} alt='logo whatsapp' />
				<h1>WhatsApp</h1>
				<button onClick={navigateToHome}>
					<img src={googleIconImg} alt='ícone do google' />
					Entrar com o Google
				</button>
			</div>
		</div>
	);
}
