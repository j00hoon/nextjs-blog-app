import { Fragment } from "react";
import ContactForm from "../../components/contact/contact-form";
import Head from "next/head";

function ContactPage() {
    return (
        <Fragment>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Contact me!" />
            </Head>
            <ContactForm />
        </Fragment>
    );
}

export default ContactPage;