import styles from "./About.module.css"
export default function About() {
    return (
        <>
            <section className={`text-center ${styles.hero}`}>
                <h1 className="display-4 fw-bold">Welcome to Academy</h1>
                <p className="lead">Empowering learners to succeed in a modern world</p>
                <img src="/school.svg" className={styles.heroImg} />
            </section>

            <section className={`container my-5 text-center ${styles.mission}`}>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2>Innovation</h2>
                        <div className="card">
                            <p>We create cutting-edge courses to prepare learners for the future.</p>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <h2>Our Mission</h2>
                        <div className="card">
                            <p>Our mission is to provide high-quality education.
                                We focus on practical skills.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* VALUES */}
            <section className={`text-center ${styles.values}`}>
                <h2 className="mb-4">Our Core Values</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <h5>Quality</h5>
                            <p>We deliver carefully crafted courses with practical value.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <h5>Accessibility</h5>
                            <p>Education should be available to everyone, everywhere.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <h5>Growth</h5>
                            <p>We believe in lifelong learning and improvement.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}