import { Grid, GridItem, Stack } from '@chakra-ui/react';
import bg1 from '../../assets/Rectangle 66.png'

const Banner = () => {
	return (
		<Grid
            height='527px'
			templateRows='repeat(2, 1fr)'
			templateColumns='repeat(5, 1fr)'
		>
            <GridItem rowSpan={2} colSpan={3} >
                <Stack bgImage={bg1} height='527px' ></Stack>
            </GridItem>
            <GridItem colSpan={2}></GridItem>
            <GridItem colSpan={2}></GridItem>
        </Grid>
	);
};

export default Banner;
