function About() {
    return (
        <main className="about-page">

            {/* Moving clouds */}
            <div className="page-cloud page-cloud-one">
                <div className="cloud"></div>
            </div>

            <div className="page-cloud page-cloud-two">
                <div className="cloud"></div>
            </div>

            <div className="page-cloud page-cloud-three">
                <div className="cloud"></div>
            </div>

            <div className="about-card">

                <div className="about-icon">
                    🌤️
                </div>

                <h1>About Weather Dashboard</h1>

                <p className="about-intro">
                    Welcome to the Weather Dashboard!
                </p>

                <p>
                    This application allows you to check weather information
                    for different cities in a simple and user-friendly way.
                </p>

                <div className="about-features">

                    <div className="about-box">
                        <span>🌍</span>
                        <h3>Multiple Cities</h3>
                        <p>
                            Check weather information for different cities.
                        </p>
                    </div>

                    <div className="about-box">
                        <span>🌙</span>
                        <h3>Dark Mode</h3>
                        <p>
                            Switch between light and dark themes.
                        </p>
                    </div>

                    <div className="about-box">
                        <span>✨</span>
                        <h3>Animated Design</h3>
                        <p>
                            Enjoy a smooth and interactive weather experience.
                        </p>
                    </div>

                </div>

            </div>

        </main>
    );
}

export default About;