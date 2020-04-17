import * as React from 'react';
import { Navbar, Navs } from './components/navbar';
import { useState } from 'react';
import { Home } from './components/home';
import { Books } from './components/Books';
import { Authors } from './components/Authors';

export const App = () => {

	const [nav, setNav] = useState<Navs>("Home")

	const view: {[key in Navs] : JSX.Element } = {
		Home: <Home />,
		Books: <Books />,
		Authors : <Authors />
	}

	return (
		<>
			<Navbar current={nav} onClick={(n) => setNav(n)} />
			{view[nav]}
		</>
	)

}