import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

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

      <DropdownButton
        className="mb-2 d-flex justify-content-end fixed-bottom"
        key={"up"}
        id={`dropdown-button-drop-up`}
        drop={"up"}
        variant="light"
        title={` Messages `}
      >
        <Dropdown.Item eventKey="up">
          <p>Pop up</p>
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
