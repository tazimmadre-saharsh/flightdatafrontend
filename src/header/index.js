import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
        <NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/arrivalData' activeStyle>
			Arrivals
		</NavLink>
		<NavLink to='/departureData' activeStyle>
			Departures
		</NavLink>
		<NavLink to='/FAQs' activeStyle>
			FAQs
		</NavLink>
		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;
