function Contact() {
    return (
        <main className="contact-page">

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

            <div className="contact-card">

                <div className="contact-icon">
                    📩
                </div>

                <h1>Contact Us</h1>

                <p>
                    Have a question, suggestion, or feedback?
                    We would love to hear from you!
                </p>

                <div className="contact-info">

                    <div className="contact-info-box">
                        <span>📧</span>
                        <div>
                            <h3>Email</h3>
                            <p>weather@example.com</p>
                        </div>
                    </div>

                    <div className="contact-info-box">
                        <span>📞</span>
                        <div>
                            <h3>Phone</h3>
                            <p>+977 9800000000</p>
                        </div>
                    </div>

                    <div className="contact-info-box">
                        <span>📍</span>
                        <div>
                            <h3>Location</h3>
                            <p>Kathmandu, Nepal</p>
                        </div>
                    </div>

                </div>

                <form className="contact-form">

                    <input
                        type="text"
                        placeholder="Your Name"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                    />

                    <textarea
                        rows="5"
                        placeholder="Your Message"
                    ></textarea>

                    <button type="submit">
                        Send Message ✨
                    </button>

                </form>

            </div>

        </main>
    );
}

export default Contact;