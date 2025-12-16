export default function Contacts() {
    return (
        <>
            <div >
                <section className="text-center py-5" >
                    <h1>Contact Us</h1>
                    <p className="lead">We’d love to hear from you! Reach out anytime.</p>
                    <div className="mt-4">
                        <p><strong>Email:</strong> info@academy.com</p>
                        <p><strong>Phone:</strong> +359 888 123 456</p>
                        <p><strong>Address:</strong> 123 Learning St, Sofia, Bulgaria</p>
                    </div>
                </section>
                <section>
                    <div className="shadow rounded overflow-hidden">
                        <iframe
                            title="Academy Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.856232010949!2d27.477980476771428!3d42.49460900748733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a694936f93c5d9%3A0xfae3adeaf90618a2!2z0JzQvtGA0YHQutCwINCz0YDQsNC00LjQvdCw!5e0!3m2!1sbg!2sbg!4v1765915125707!5m2!1sbg!2sbg"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                </section >
            </div >
        </>
    )
}