import React from "react";
import styles from "./Home.module.css";

const galleryImages = [
    "/course1.webp",
    "/course2.webp",
    "/course3.webp",
    "/course4.webp",
];

export default function Home() {
    return (
        <div className={styles.homePage}>

            <section className={styles.hero}>
                <img src="/school.svg" alt="Academy Logo" className={styles.heroLogo} />
                <h1 className="text-center mt-3">Welcome to Academy</h1>
                <p className="text-center">Learn. Grow. Succeed.</p>
            </section>

            <section className={`container mt-5 ${styles.gallery}`}>
                <div className="row g-3">
                    {galleryImages.map((img, index) => (
                        <div key={index} className="col-md-3 col-sm-6">
                            <img src={img} alt={`Gallery ${index + 1}`} className="img-fluid rounded shadow-sm" />
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}