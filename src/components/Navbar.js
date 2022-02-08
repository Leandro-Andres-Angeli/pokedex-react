import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
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
					<Typography
						component={Link}
						to={links[0][0].path}
						variant="h1"
						sx={{ fontSize: '2rem', color: 'inhert', textDecoration: 'none' }}
					>
						Pokedex
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
							justifyContent: 'center',
							alignItems: 'center',
							gap: '1rem',
						}}
					>
						{links.map((e, i) =>
							e.map((f, i) => {
								return (
									<>
										<IconButton
											component={Link}
											to={f.path}
											key={i + 2}
											sx={{
												color: 'white',
												fill: 'white',
												'&:hover': {
													borderRadius: 1,
												},
												textTransform: 'uppercase ',
												fontSize: '1rem',
											}}
										>
											{f.icon}
											{f.link}
										</IconButton>
									</>
								);
							})
						)}
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
							{links.map((e, i) =>
								e.map((f, i) => {
									return (
										<MenuItem key={i} onClick={handleCloseNavMenu}>
											<IconButton
												component={Link}
												to={f.path}
												key={i + 2}
												color="primary"
												sx={{ fill: theme.palette.primary.main }}
											>
												{f.icon}
												{f.link}
											</IconButton>
										</MenuItem>
									);
								})
							)}
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
			<div className={classes.spacing}></div>
		</>
	);
};

export default Navbar;
