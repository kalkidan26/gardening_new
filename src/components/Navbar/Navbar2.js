import { IconContext } from 'react-icons';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
} from './NavbarStyles.js';

const Navbar2 = () => {

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<NavIcon src="../assets/logo.png" alt="logo" />
					</NavLogo>
					
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar2;
