const apiKey = 'bbc4662fe1f93bb7d7ba6f0992cbd993' 

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = searchInput.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the retrieved data to check

            locationElement.textContent = data.name;
            temperatureElement.textContent = `${data.main.temp} °C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            alert('Failed to fetch weather data. Please try again.');
        });
});
