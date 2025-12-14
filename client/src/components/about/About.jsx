import styles from "./About.module.css"
export default function About() {
    return (
        <>
            <section className={`text-center ${styles.hero}`}>
                <h1 className="display-4 fw-bold">Welcome to Academy</h1>
                <p className="lead">Empowering learners to succeed in a modern world</p>
                <img src="/school.svg" className={styles.heroImg} />
            </section>

            <section className={`container my-5 ${styles.mission}`}>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2>Innovation</h2>
                        <div>
                            <p>We create cutting-edge courses to prepare learners for the future.</p>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to provide high-quality, accessible education to learners worldwide.
                            We focus on practical skills and real-world knowledge to empower students.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}