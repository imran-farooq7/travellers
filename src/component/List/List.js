import {
	Typography,
	InputLabel,
	Grid,
	MenuItem,
	FormControl,
	Select,
} from "@mui/material";
import { useState } from "react";
import useStyles from "./styles";
import PlaceDetails from "../PlaceDetail/PlaceDetails";
const List = ({ places }) => {
	const [type, setType] = useState("restaurants");
	const [rating, setRating] = useState(0);
	const styles = useStyles();
	return (
		<div className={styles.container}>
			<Typography variant="h4" style={{ marginBottom: "1rem" }}>
				Hotels,Restaurants and Attractions around you
			</Typography>
			<FormControl className={styles.formControl}>
				<InputLabel>Type</InputLabel>
				<Select
					style={{ marginTop: "1rem" }}
					value={type}
					onChange={(e) => setType(e.target.value)}>
					<MenuItem value={"restaurants"}>Restaurants</MenuItem>
					<MenuItem value={"hotel"}>Hotels</MenuItem>
					<MenuItem value={"attractions"}>Attractions</MenuItem>
				</Select>
			</FormControl>
			<FormControl className={styles.formControl}>
				<InputLabel>Rating</InputLabel>
				<Select
					style={{ marginTop: "1rem", marginLeft: "1rem" }}
					value={rating}
					onChange={(e) => setRating(e.target.value)}>
					<MenuItem value={0}>All</MenuItem>
					<MenuItem value={3}>Above 3.0</MenuItem>
					<MenuItem value={4}>Above 4.0</MenuItem>
					<MenuItem value={4.5}>Above 4.5</MenuItem>
				</Select>
			</FormControl>
			<Grid container spacing={3} className={styles.list}>
				{places?.map((place, i) => {
					return (
						<Grid item key={i} xs={12}>
							<PlaceDetails place={place} />
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
};
export default List;
