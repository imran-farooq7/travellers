import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import { LocationCityOutlined } from "@mui/icons-material";
import Rating from "@mui/lab";
import useStyles from "./styles";

const Map = ({ setCoordinate, coordinate }) => {
	const styles = useStyles();
	const isMobile = useMediaQuery("min-width:600px");

	return (
		<div className={styles.mapContainer}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyDJL9lwGR90NLaPB27okMfizODOnGvLDOw" }}
				defaultCenter={coordinate}
				center={coordinate}
				defaultZoom={14}
				onChange={(e) =>
					setCoordinate({
						lat: e.center.lat,
						lng: e.center.lng,
					})
				}
				onChildClick={""}
				options={""}></GoogleMapReact>
		</div>
	);
};
export default Map;
