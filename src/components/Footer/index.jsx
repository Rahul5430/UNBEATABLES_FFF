import {
	Box,
	Button,
	Grid,
	GridItem,
	HStack,
	Text,
	Tooltip,
	Stack,
	ButtonGroup,
	Divider,
} from '@chakra-ui/react';
import GalaxyWars from '../../assets/GalaxyWars.png';
import ACM from '../../assets/ACM.png';
import ACM2 from '../../assets/ACM2.png';
import Cobra from '../../assets/Cobra.png';
import facebook from '../../assets/Vector.png';
import twitter from '../../assets/Twitter.png';
import instagram from '../../assets/Instagram.png';
import youtube from '../../assets/Youtube.png';
import discord from '../../assets/Vector (3).png';
import linkedin from '../../assets/Linkedin.png';
import PS4 from '../../assets/PS4.png';
import Steam from '../../assets/Steam.png';
import XBoxOne from '../../assets/X-box.png';
import EpicGames from '../../assets/EpicGames.png';
import {
	footerLinks1,
	footerLinks2,
	footerLinks3,
} from '../../data/footerLinks';

const icons = {
	facebook: facebook,
	twitter: twitter,
	instagram: instagram,
	youtube: youtube,
	discord: discord,
	linkedin: linkedin,
	ps4: PS4,
	steam: Steam,
	xBoxOne: XBoxOne,
	epicGames: EpicGames,
};

const Logo = ({ src }) => {
	return (
		<Box m={2}>
			<img alt='logo' src={src} width={133} height={59} />
		</Box>
	);
};

const LinkIcon = ({ index, label, icon }) => (
	<Tooltip
		label={label}
		aria-label={`${label}-tooltip`}
		key={`link-${index}`}
	>
		<img src={icons[icon]} alt={label} />
	</Tooltip>
);

const LinkIconBar = ({ links, ...props }) => {
	return (
		<Stack
			my={4}
			direction='row'
			spacing='12px'
			justify='center'
			{...props}
		>
			{links.map((link, index) => (
				<LinkIcon key={link.label} index={index} {...link} />
			))}
		</Stack>
	);
};

const Footer = () => {
	return (
		<Stack bg={'#000000'}>
			<Grid templateColumns='repeat(6, 1fr)' gap={2}>
				<GridItem colSpan={1}>
					<Logo src={GalaxyWars} />
				</GridItem>
				<GridItem colSpan={4}>
					<HStack>
						<ButtonGroup spacing={6}>
							<Button p={0}>GALAXY WARS</Button>
							<Button p={0}>ABOUT US</Button>
							<Button p={0}>STORE</Button>
							<Button p={0}>LOGIN</Button>
						</ButtonGroup>
					</HStack>
					<HStack>
						<LinkIconBar links={footerLinks1} />
					</HStack>
					<HStack>
						<LinkIconBar links={footerLinks2} />
					</HStack>
					<Text textAlign={'left'} fontSize='15px' mb={8}>
						PEC ACM CSS © 2022. All logos and features are
						registered under Fastest Frontend First team’s
						jurisdiction. Copying and usage of logos, assets and
						other information of “GALAXY WARS”are to be done with
						permission only. Anyways, if you reached till here, then
						you are a winner in yourself. Kudos !
					</Text>
				</GridItem>
				<GridItem colSpan={1} alignItems='center'>
					<Logo src={ACM2} />
				</GridItem>
			</Grid>
			<Divider bgColor={'#F4A123'} />
			<Grid templateColumns='repeat(6, 1fr)' gap={2}>
				<GridItem colSpan={1}>
					<Logo src={ACM} />
				</GridItem>
				<GridItem colSpan={4}>
					<HStack>
						<ButtonGroup spacing={6}>
							<Button p={0}>ABOUT US</Button>
							<Button p={0}>OUR GAMES</Button>
							<Button p={0}>CAREERS</Button>
							<Button p={0}>NEWS</Button>
							<Button p={0}>INVESTORS</Button>
							<Button p={0}>CONTACT</Button>
						</ButtonGroup>
					</HStack>
					<HStack>
						<ButtonGroup spacing={6} style={{ color: 'gray' }}>
							<Button p={0}>PRIVACY POLICY & LEGAL</Button>
							<Button p={0}>
								DO NOT SELL MY PERSONAL INFORMATION
							</Button>
							<Button p={0}>TERMS AND CONDITIONS</Button>
							<Button p={0}>STORE</Button>
							<Button p={0}>FORUMS</Button>
						</ButtonGroup>
					</HStack>
					<HStack>
						<LinkIconBar links={footerLinks3} />
					</HStack>
					<Text textAlign={'left'} fontSize='15px' mb={8}>
						© 2022 PEC ACM CSS Student Chapter. All Rights Reserved
					</Text>
				</GridItem>
				<GridItem colSpan={1} alignItems='center'>
					<Logo src={Cobra} />
				</GridItem>
			</Grid>
		</Stack>
	);
};

export default Footer;
