import { useState, useEffect } from 'react';
import Form from './Form';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function GetWeatherData() {
  const [city, setCity] = useState('');
  const [cityData, setCityData] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault(); // prevent the form from refreshing the page
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        setCityData(data);
      })
      .catch((error) => console.log('Error:', error.message));
  };

  /* Якщо ти хочеш лайв-апдейт на кожному нажатті кнопки в інпуті
  const handleFormSubmit = (event) => {
    event.preventDefault(); // prevent the form from refreshing the page
  };

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        setCityData(data);
      })
      .catch((error) => console.log('Error:', error.message));
  }, [city]);

*/

  return (
    <div>
      {cityData && cityData.main && (
        <div>
          <h2>{cityData.name}</h2>
          <h3>{cityData.main.temp}°C</h3>
        </div>
      )}
      <Form setInput={setCity} handleSubmit={handleFormSubmit} />
    </div>
  );
}

export default GetWeatherData;
