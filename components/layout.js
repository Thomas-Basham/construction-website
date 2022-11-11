import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { Dropdown } from "react-bootstrap";
import ContactForm from "./ContactForm";
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Construction Website</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Building futures together" />
      </Head>

      <Header />
      <main className="main">{children}</main>
      <Footer />

      <Dropdown
        className="mb-2 d-flex justify-content-end fixed-bottom"
        id={`dropdown-button-drop-up`}
      >
        <Dropdown.Toggle variant="none" id="dropdown-autoclose-outside">
          Contact Us
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <ContactForm />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
