import axios from "axios";
export const getPlacesData = async (lat, lng, type) => {
	try {
		const {
			data: { data },
		} = await axios.get(
			`https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,
			{
				params: {
					latitude: lat,
					longitude: lng,
				},
				headers: {
					"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
					"x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_TRIP_API,
				},
			},
		);
		return data;
	} catch (error) {
		console.log(error);
	}
};
getPlacesData();
