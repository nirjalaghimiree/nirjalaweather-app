import { useState } from "react";

function Home() {
    const [city, setCity] = useState("Kathmandu");

    const weatherData = {
        Kathmandu: {
            temperature: "76.35°F",
            humidity: "73%",
            condition: "Clouds",
            icon: "☁️",
        },

        Pokhara: {
            temperature: "72.50°F",
            humidity: "78%",
            condition: "Clouds",
            icon: "🌥️",
        },

        Chitwan: {
            temperature: "80.10°F",
            humidity: "68%",
            condition: "Clear",
            icon: "☀️",
        },

        Biratnagar: {
            temperature: "82.40°F",
            humidity: "70%",
            condition: "Sunny",
            icon: "🌤️",
        },
    };

    const weather = weatherData[city];

    return (
        <main className="weather-page">

            {/* Animated sky */}
            <div className="sky">

                <div className="sun"></div>

                <div className="moon"></div>

                <div className="cloud cloud-one"></div>
                <div className="cloud cloud-two"></div>
                <div className="cloud cloud-three"></div>

            </div>


            {/* Weather Dashboard */}
            <div className="weather-container">

                <h1>Weather Dashboard</h1>

                <p className="subtitle">
                    Check the current weather conditions
                </p>


                {/* City selection */}
                <select
                    className="city-select"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                >
                    <option value="Kathmandu">Kathmandu</option>
                    <option value="Pokhara">Pokhara</option>
                    <option value="Chitwan">Chitwan</option>
                    <option value="Biratnagar">Biratnagar</option>
                </select>


                {/* Weather Card */}
                <div className="weather-card">

                    <h2>{city}</h2>


                    {/* Weather icon */}
                    <div className="weather-icon">
                        {weather.icon}
                    </div>


                    <div className="temperature">
                        {weather.temperature}
                    </div>


                    <p className="condition">
                        {weather.condition}
                    </p>


                    {/* Weather details */}
                    <div className="weather-details">

                        <div className="weather-box">
                            <span>💧</span>
                            <h3>Humidity</h3>
                            <p>{weather.humidity}</p>
                        </div>


                        <div className="weather-box">
                            <span>🌡️</span>
                            <h3>Temperature</h3>
                            <p>{weather.temperature}</p>
                        </div>


                        <div className="weather-box">
                            <span>{weather.icon}</span>
                            <h3>Condition</h3>
                            <p>{weather.condition}</p>
                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
}

export default Home;