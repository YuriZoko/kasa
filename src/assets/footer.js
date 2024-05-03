import logo from './logo.svg'

import './style.css'

function Footer() {
	return (
		<footer className="footer">
			<img src={logo} className="footer-logo" alt="Kasa Logo" />
			<h3 className="footer-credit">© 2020 Kasa. All rights reserved</h3>
		</footer>
	)
}

export default Footer
