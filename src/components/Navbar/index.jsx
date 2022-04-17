import { Box, Button, Spacer, Stack } from '@chakra-ui/react';
import logo from '../../assets/GalaxyWars.png';

const navBtns = [
	{
		label: 'EXPLORE',
		href: '#',
	},
	{
		label: 'NEWS',
		href: 'news',
	},
	{
		label: 'COMMUNITY',
		href: '#',
	},
	{
		label: 'EQUIP',
		href: '#',
	},
	{
		label: 'GUIDE',
		href: '#',
	},
	{
		label: 'STORE',
		href: 'store',
	},
	{
		label: 'BUY NOW',
		href: '#',
	},
	{
		label: 'LOGIN',
		href: '#',
	},
];

const Logo = () => {
	return (
		<Box m={2}>
			<img alt='logo' src={logo} width={133} height={59} />
		</Box>
	);
};

const NavBtns = ({ size }) => {
	const btns = navBtns.map((btn) => (
		<Button
			key={btn.label}
			size={size}
			variant='link'
			mb={2}
			_hover={{
				bg: '#231A0B',
				border: '2px solid #F4A123',
			}}
			p={3}
			height={'32px'}
			bgColor={btn.label === 'BUY NOW' ? '#F4A123' : 'transparent'}
			border={'2px solid transparent'}
		>
			{btn.label}
		</Button>
	));
	return <>{btns}</>;
};

const MenuLinks = () => (
	<Stack
		// display={{ base: 'none', sm: 'none', md: 'block' }}
		width={{ sm: 'full', md: 'auto' }}
		direction={['column', 'row', 'row', 'row']}
		alignItems='center'
		mr={'24px'}
		style={{ marginRight: '24px' }}
	>
		<NavBtns size='md' />
	</Stack>
);

const Navbar = () => {
	return (
		<Stack
			as='header'
			w='100%'
			direction={['row', 'row', 'row', 'row']}
			alignItems='center'
			justifyContent='center'
			bg={'#000000'}
		>
			<Logo />
			<Spacer />
			<MenuLinks />
		</Stack>
	);
};

export default Navbar;
