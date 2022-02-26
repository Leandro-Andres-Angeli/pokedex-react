import React from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '@mui/styles';

const Footer = () => {
	const theme = useTheme();
	console.log(theme.palette);
	return (
		<Container
			maxWidth="lg"
			compontent="footer"
			sx={{
				bgcolor: theme.palette.primary.main,
				display: 'flex',
				justifyContent: 'end',
				pb: '1rem',
				pt: '4rem',
			}}
		>
			<Typography
				sx={{
					color: 'white',
					fontSize: '14px',
					display: 'flex',
					justifyContent: 'baseline',
				}}
			>
				By Leandro Angeli © 2022 ,Buenos Aires Argentina{' '}
				<LinkedInIcon sx={{ ml: 2 }}></LinkedInIcon>
			</Typography>
		</Container>
	);
};

export default Footer;
