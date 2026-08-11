function About() {
    return (
        <div id="center">
            <h1>About This App</h1>
            <p>
                This Weather Dashboard is a multi-page React application built to
                demonstrate client-side routing, live REST API integration, and
                persisted user preferences.
            </p>
            <h2>Build Stack</h2>
            <ul style={{ textAlign: "left" }}>
                <li><strong>React 18</strong> — component-based UI</li>
                <li><strong>Vite</strong> — build tool and dev server</li>
                <li><strong>React Router v6</strong> — client-side page navigation</li>
                <li><strong>Axios</strong> — asynchronous HTTP requests</li>
                <li><strong>OpenWeatherMap API</strong> — live weather data</li>
                <li><strong>CSS Custom Properties</strong> — theme and unit persistence</li>
            </ul>
        </div>
    );
}
export default About