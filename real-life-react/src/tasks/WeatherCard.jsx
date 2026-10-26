function WeatherCard({ city, tempF, condition, windMph }) {
  let advice
  let adviceClass

  if (tempF <= 32) {
    advice = 'Freezing: heavy coat, hat and gloves'
    adviceClass = 'advice-freezing'
  } else if (tempF <= 50) {
    advice = 'Cold: wear a jacket'
    adviceClass = 'advice-cold'
  } else if (tempF <= 75) {
    advice = 'Nice: a light layer is fine'
    adviceClass = 'advice-nice'
  } else {
    advice = 'Hot: shorts and plenty of water'
    adviceClass = 'advice-hot'
  }

  let conditionIcon
  if (condition === 'sunny') conditionIcon = '☀️'
  else if (condition === 'cloudy') conditionIcon = '☁️'
  else if (condition === 'rain') conditionIcon = '🌧️'
  else if (condition === 'snow') conditionIcon = '❄️'

  let alert = null
  if (condition === 'snow' && tempF <= 32) {
    alert = 'Check for school delays'
  } else if (windMph >= 25) {
    alert = 'Wind advisory'
  }

  return (
    <div className="weather-card">
      <div className="weather-heading">
        <span className="weather-icon">{conditionIcon}</span>
        <h3>{city}: {tempF}°F</h3>
      </div>
      <p className={`weather-advice ${adviceClass}`}>{advice}</p>
      {condition === 'rain' && <p>Bring an umbrella ☂️</p>}
      {alert && <div className="alert-banner">{alert}</div>}
    </div>
  )
}

export default WeatherCard
