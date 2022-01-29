import axios from "axios";
export const getPlacesData = async (lat, lng) => {
	const URL =
		"https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng";

	try {
		const {
			data: { data },
		} = await axios.get(URL, {
			params: {
				latitude: lat,
				longitude: lng,
			},
			headers: {
				"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
				"x-rapidapi-key": "e855ed817fmsh254d4ee6a4771d6p1a293ejsnc52d1f6abd55",
			},
		});
		return data;
	} catch (error) {
		console.log(error);
	}
};
getPlacesData();
