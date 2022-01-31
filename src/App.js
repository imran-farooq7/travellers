import Header from "./component/Header/Header";
import List from "./component/List/List";
import Map from "./component/Map/Map";
import PlaceDetails from "./component/PlaceDetail/PlaceDetails";
import { CssBaseline, Grid } from "@mui/material";
import { getPlacesData } from "./api/index";
import { useEffect, useState } from "react";
const App = () => {
	const [places, setPlaces] = useState([]);
	const [coordinate, setCoordinate] = useState({});
	const [type, setType] = useState("restaurants");
	const [rating, setRating] = useState(0);
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setCoordinate({ lat: latitude, lng: longitude });
			},
		);
	}, []);
	useEffect(() => {
		getPlacesData(coordinate.lat, coordinate.lng, type).then((data) => {
			// console.log(coordinate);
			// console.log(data);
			setPlaces(data);
		});
	}, [coordinate, type]);

	return (
		<>
			<CssBaseline />
			<Header />
			<Grid container spacing={3} style={{ width: "100%" }}>
				<Grid item xs={12} md={4}>
					<List
						places={places}
						type={type}
						setType={setType}
						rating={rating}
						setRating={setRating}
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<Map
						setCoordinate={setCoordinate}
						coordinate={coordinate}
						places={places}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default App;
