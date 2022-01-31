import {
	Box,
	Typography,
	Card,
	Button,
	CardMedia,
	CardContent,
	CardActions,
	Chip,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import Rating from "@mui/lab/Rating";
import useStyles from "./styles";

const PlaceDetails = ({ place }) => {
	const styles = useStyles();
	return (
		<Card elevation={6}>
			<CardMedia
				style={{ height: 350 }}
				image={
					place.photo
						? place.photo.images.large.url
						: "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
				}
				title={place.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5">
					{place.name}
				</Typography>
				<Box display="flex" justifyContent="space-between">
					<Typography variant="subtitle1">Price</Typography>
					<Typography variant="subtitle1" gutterBottom>
						{place.price_level ? place.price_level : "$$"}
					</Typography>
				</Box>
				<Box display="flex" justifyContent="space-between">
					<Typography variant="subtitle1">Ranking</Typography>
					<Typography variant="subtitle1" gutterBottom>
						{place.ranking}
					</Typography>
				</Box>
				{place?.awards?.map((award, i) => (
					<Box
						key={i}
						my={1}
						display="flex"
						justifyContent="space-between"
						alignItems="center">
						<img src={award.images.small} alt="awards" />
						<Typography variant="subtitle2" color="textSecondary">
							{award.display_name}
						</Typography>
					</Box>
				))}
				{place?.cuisine?.map(({ name }) => (
					<Chip key={name} size="small" label={name} className={styles.chip} />
				))}
				{place?.address && (
					<Typography
						variant="body2"
						color="textSecondary"
						className={styles.subtitle}>
						<LocationOnIcon /> {place.address}
					</Typography>
				)}
				{place?.phone && (
					<Typography
						variant="body2"
						color="textSecondary"
						className={styles.spacing}>
						<PhoneIcon /> {place.phone}
					</Typography>
				)}
				<CardActions>
					<Button
						size="small"
						color="primary"
						onClick={() => window.open(place.web_url)}>
						Trip Advisor
					</Button>
					<Button
						size="small"
						color="primary"
						onClick={() => window.open(place.website)}>
						WEBSITE
					</Button>
				</CardActions>
			</CardContent>
		</Card>
	);
};
export default PlaceDetails;
