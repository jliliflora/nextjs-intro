import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  // console.log(router);

  return (
    <nav className={styles.nav}>
      <Link
        href="/"
        className={`${styles.link} ${
          router.pathname === "/" ? styles.active : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={[
          styles.link,
          router.pathname === "/about" ? styles.active : "",
        ].join(" ")}
      >
        About
      </Link>
      <Link
        href="/about"
        style={{ color: router.pathname === "/about" ? "red" : "blue" }}
      >
        Style
      </Link>
    </nav>
  );
}
