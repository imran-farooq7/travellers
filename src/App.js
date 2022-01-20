import Header from "./component/Header/Header";
import List from "./component/List/List";
import Map from "./component/Map/Map";
import PlaceDetails from "./component/PlaceDetail/PlaceDetails";
import { CssBaseline, Grid } from "@mui/material";
const App = () => {
	return (
		<>
			<CssBaseline />
			<Header />
			<Grid container spacing={3} style={{ width: "100%" }}>
				<Grid item xs={12} md={4}>
					<List />
				</Grid>
				<Grid item xs={12} md={4}>
					<Map />
				</Grid>
			</Grid>
		</>
	);
};

export default App;
