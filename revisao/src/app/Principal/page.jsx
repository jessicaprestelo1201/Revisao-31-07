import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <header>
        <h1>Bem-vindo à Home</h1>
        <nav>
          <Link href="/Revisao">Ir para Revisao</Link>
        </nav>
      </header>
      <Image src="/img/cachorro.jpg" alt="Minha foto" width={400} height={300} />
    </div>
  );
}







