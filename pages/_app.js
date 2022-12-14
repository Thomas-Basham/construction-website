import "../styles/globals.css";
import Layout from "../components/layout";
import { SSRProvider } from 'react-bootstrap';
import ThemeProvider from "react-bootstrap/ThemeProvider";
function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
    <Layout>
      <Component {...pageProps} />

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossOrigin="anonymous"
      />
    </Layout>
    </SSRProvider>
  );
}

export default MyApp;
