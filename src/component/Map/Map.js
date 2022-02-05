import GoogleMapReact from "google-map-react";
import useStyles from "./styles";

const Map = ({ setCoordinate, coordinate, places }) => {
	const styles = useStyles();

	return (
		<div className={styles.mapContainer}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
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
				options={{
					disableDefaultUI: true,
					zoomControl: true,
				}}></GoogleMapReact>
		</div>
	);
};
export default Map;
