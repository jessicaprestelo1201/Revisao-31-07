import Link from "next/link";
import styles from "./revisao.module.css";

export default function RevisaoPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Link href="/app/page.jsx" className={styles.link}>
          Voltar para Home
        </Link>
      </div>

      <div className={styles.card}>
        <a
          href="https://next.projetosds.tech"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Site Externo
        </a>
      </div>
    </div>
  );
}
