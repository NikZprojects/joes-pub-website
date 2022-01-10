import Head from "next/head";
import styles from "../styles/Home.module.css";

const Template = () => {
  return (
    <div>
      <Head>
        <title>Joe&apos;s Pub</title>
        <meta name="description" content="Where fun meets reality." />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Joe&apos;s Pub, LLC.</p>
      </footer>
    </div>
  );
};

export default Template;
