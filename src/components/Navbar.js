import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { Box, IconButton, Menu } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
// install npm install @material-ui/icons to use material icons
const Navbar = (props) => {
	const { links } = props;
	const [anchorElNav, setAnchorElNav] = useState(null);
	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const theme = useTheme();

	const spacingClass = makeStyles({
		spacing: theme.mixins.toolbar,
	});
	const classes = spacingClass();

	return (
		<>
			<AppBar color="primary">
				<Toolbar>
					<Typography variant="h1" sx={{ fontSize: '2rem' }}>
						Pokedex
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{links.map((link, i) => (
							<>
								<Button
									key={i}
									// onClick={() => {}}
									sx={{
										my: 2,
										color: 'white',
										display: 'block',
										alignSelf: 'end',
									}}
								>
									{link}
								</Button>
							</>
						))}
					</Box>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'flex', md: 'none' },
							justifyContent: 'end',
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
							xs={{ alignSelf: 'end' }}
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
								textTransform: 'uppercase',
							}}
						>
							{links.map((link, i) => (
								<MenuItem key={i} onClick={handleCloseNavMenu}>
									<Typography key={link} textAlign="center">
										{link}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
			<div className={classes.spacing}></div>
		</>
	);
};

export default Navbar;
