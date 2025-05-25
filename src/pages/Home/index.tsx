import styles from './Home.module.css';
import { useGetArtistList } from '../../api/hooks/artist/useGetArtistList';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { artistList, loading, error } = useGetArtistList();
  const navigate = useNavigate();
  if (loading) return <div className={styles.center}>Cargando artistas...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!artistList || artistList.length === 0) {
    return <div className={styles.center}>No se encontraron artistas.</div>;
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}></h1>
      <section className={styles.grid}>
        {artistList.map((artist) => (
          <article
            key={artist.id}
            className={styles.card}
            onClick={() => navigate(`/artist/${artist.id}`)}>
            <img
              src={artist.image}
              alt={artist.name}
              className={styles.image}
              loading='lazy'
            />
            <div className={styles.info}>
              <h2 className={styles.name}>{artist.name}</h2>
              <p className={styles.genre}>{artist.genre}</p>
              <p className={styles.origin}>{artist.origin}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
