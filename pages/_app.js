import NavBar from "@/components/NavBar";
import Layout from "@/components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <span>app</span>
      <style jsx global>{`
        a {
        }
      `}</style>
    </Layout>
  );
}
