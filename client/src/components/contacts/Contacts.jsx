import React from "react";
import styles from "./Contacts.module.css";


export default function Contacts() {
    return (
        <>
            <div className={styles.contactsPage}>
                <section className={`text-center py-5 ${styles.infoSection}`}>
                    <h1>Contact Us</h1>
                    <p className="lead">We’d love to hear from you! Reach out anytime.</p>

                    {/* Contact Info */}
                    <div className="mt-4">
                        <p><strong>Email:</strong> info@academy.com</p>
                        <p><strong>Phone:</strong> +359 888 123 456</p>
                        <p><strong>Address:</strong> 123 Learning St, Sofia, Bulgaria</p>
                    </div>

                </section>
            </div>
        </>
    )
}