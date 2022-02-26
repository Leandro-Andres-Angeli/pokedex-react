import React from 'react';
import { CardHeader, Avatar, Typography } from '@mui/material';

const PokeCardHeader = (props) => {
	const { source } = props;
	return (
		<CardHeader
			sx={{
				textTransform: 'uppercase',
				fontSize: '50px',
				alignItems: 'center',
				display: 'flex',
			}}
			avatar={
				<Avatar sx={{ fontSize: 14 }}>
					{source.id < 10 ? (
						<>#00{source.id}</>
					) : source.id < 100 ? (
						<>#0{source.id}</>
					) : (
						<>#{source.id}</>
					)}
				</Avatar>
			}
			title={
				<>
					<Typography paragraph component="h2">
						{source.name}
					</Typography>
				</>
			}
			action={
				<>
					<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
						<image
							href={source.sprites.front_default}
							height="100"
							width="100"
						/>
					</svg>
				</>
			}
			style={{ fontSize: '14px' }}
		></CardHeader>
	);
};

export default PokeCardHeader;
