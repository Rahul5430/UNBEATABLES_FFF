import { FormControl, Input, Stack, Text, Textarea } from '@chakra-ui/react';
import gradientBand from '../../assets/gradient_band.png';

const Anomalies = () => {
	return (
		<Stack>
			<Stack bgImage={gradientBand} my={10} w='100%'>
				<Text fontSize={'64px'} py={'14px'}>
					Report Anomalies
				</Text>
			</Stack>
			<Stack px={40}>
				<FormControl isRequired>
					<Input placeholder='NAME' w='30%' />
					<Input placeholder='EMAIL' w='70%' />
					<Textarea placeholder='Write your content here...' pt={5} />
				</FormControl>
			</Stack>
		</Stack>
	);
};

export default Anomalies;
