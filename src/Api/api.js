const currentDate = new Date().toISOString().split('T')[0]; // Get the current date in 'YYYY-MM-DD' format
const url = `https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations?fromStationCode=NDLS&toStationCode=RE&dateOfJourney=${currentDate}`;

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9ea9bd67f4msh9aa60d09311e188p1be52djsnfd7d1b544049',
        'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}





