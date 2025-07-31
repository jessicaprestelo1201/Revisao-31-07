import Link from "next/link";
import Head from "next/head";

export default function NotFound() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#f8f9fa',
            color: '#343a40',
            textAlign: 'center',
            padding: '2rem',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        }}>
            <Head>
                <title>404 - Página não encontrada</title>
            </Head>
            
            <h1 style={{
                fontSize: '2.5rem',
                marginBottom: '1rem',
                color: '#495057'
            }}>🔍 404 - Página não encontrada</h1>
            
            <p style={{
                fontSize: '1.2rem',
                marginBottom: '2rem',
                maxWidth: '600px',
                lineHeight: '1.6'
            }}>Desculpe, não conseguimos encontrar o que você está procurando.</p>
            
            <div style={{
                display: 'flex',
                gap: '1.5rem',
                marginTop: '1.5rem',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                <Link href="/" style={{
                    padding: '0.8rem 1.5rem',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: '#0d6efd',
                    color: 'white',
                    border: '2px solid #0d6efd'
                }}>🏠 Voltar para Home</Link>
                
                <Link href="/contato" style={{
                    padding: '0.8rem 1.5rem',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: 'transparent',
                    color: '#0d6efd',
                    border: '2px solid #0d6efd'
                }}>💬 Fale Conosco</Link>
            </div>
        </div>
    );
}