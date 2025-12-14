import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <>
            <footer className={`bg-light text-dark pt-4 pb-3 border-top ${styles.footer}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <h4 className="fw-bold">Academy</h4>
                            <img src="/school.svg" className={styles.logo}/>
                            <p className="text-muted">
                                A modern learning platform for students and professionals.
                            </p>
                        </div>

                        <div className="col-md-4 mb-3">
                            <h5 className="fw-bold">Quick Links</h5>
                            <ul className="list-unstyled">

                            </ul>
                        </div>

                        <div className="col-md-4 mb-3">
                            <h5 className="fw-bold">Contacts</h5>
                            <p className="text-muted mb-1">Email: academy@example.com</p>
                            <p className="text-muted">Phone: +359 888 123 456</p>
                        </div>

                    </div>

                    <hr />

                    <p className="text-center text-muted mb-0">
                        © {new Date().getFullYear()} Academy — All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}
