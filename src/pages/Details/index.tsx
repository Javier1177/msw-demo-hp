import { useParams } from 'react-router-dom';
import { useGetArtistInfo } from '../../api/hooks/artist/useGetArtistInfo';
import styles from './details.module.css';

export default function ArtistDetail() {
  const { artistId } = useParams();
  const { artistInfo, loading, error } = useGetArtistInfo(artistId || '');

  if (loading) return <div className={styles.status}>Cargando artista...</div>;
  if (error) return <div className={styles.status}>{error}</div>;
  if (!artistInfo) return null;

  return (
    <main className={styles.page}>
      <div className={styles.topSection}>
        <div className={styles.nameContainer}>
          <h1 className={styles.name}>{artistInfo.name}</h1>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={artistInfo.image}
            alt={artistInfo.name}
            className={styles.image}
          />
        </div>
      </div>

      <section className={styles.infoSection}>
        <p>
          <strong>Género:</strong> {artistInfo.genre}
        </p>
        <p>
          <strong>Origen:</strong> {artistInfo.origin}
        </p>
        <p className={styles.description}>{artistInfo.description}</p>
      </section>
    </main>
  );
}
