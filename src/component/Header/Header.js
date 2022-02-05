import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import { Search } from "@mui/icons-material";
import useStyles from "./styles";
const Header = ({ setCoordinate }) => {
	const styles = useStyles();
	// const [Autocomplete, setAutocomplete] = useState(null);
	// const onLoadHandler = (autoC) => setAutocomplete(autoC);
	// const onPlaceChangedHandler = () => {
	// 	const lat = Autocomplete.getPlace().geometry.location.lat();
	// 	const lng = Autocomplete.getPlace().geometry.location.lng();
	// 	setCoordinate({ lat, lng });
	// };
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
						{/* <Autocomplete */}

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
