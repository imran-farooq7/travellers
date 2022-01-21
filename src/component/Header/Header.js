import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import { Search } from "@mui/icons-material";
import useStyles from "./styles";
const Header = () => {
	const styles = useStyles();
	return (
		<div>
			<AppBar position="static">
				<Toolbar className={styles.toolbar}>
					<Typography variant="h5" className={styles.title}>
						Traveller
					</Typography>
					<Box display="flex">
						<Typography variant="h6" className={styles.title}>
							Explore new places
						</Typography>
						{/* <Autocomplete> */}
						<div className={styles.search}>
							<div className={styles.searchicon}>
								<Search />
							</div>
							<InputBase
								placeholder="Search..."
								classes={{ root: styles.inputRoot, input: styles.inputinput }}
							/>
						</div>
						{/* </Autocomplete> */}
					</Box>
				</Toolbar>
			</AppBar>
		</div>
	);
};
export default Header;
