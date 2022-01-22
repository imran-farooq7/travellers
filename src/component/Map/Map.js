import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import { LocationCityOutlined } from "@mui/icons-material";
import Rating from "@mui/lab";
import useStyles from "./styles";

const Map = () => {
	const styles = useStyles();
	const isMobile = useMediaQuery("min-width:600px");
	const coordinate = { lat: 0, lng: 0 };
	return (
		<div className={styles.mapContainer}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyDJL9lwGR90NLaPB27okMfizODOnGvLDOw" }}
				defaultCenter={coordinate}
				center={coordinate}
				defaultZoom={14}
				onChange={""}
				onChildClick={""}
				options={""}></GoogleMapReact>
		</div>
	);
};
export default Map;
