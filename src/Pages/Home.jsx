function Home() {
    return (
        <main className="weather-container">

            <h1>Weather Dashboard</h1>

            <select className="city-select">
                <option>Kathmandu</option>
                <option>Pokhara</option>
                <option>Chitwan</option>
                <option>Biratnagar</option>
            </select>

            <div className="weather-info">

                <h2>Kathmandu</h2>

                <p>Temperature: 76.35°F</p>

                <p>Humidity: 73%</p>

                <p>Condition: Clouds</p>

            </div>

        </main>
    );
}

export default Home;