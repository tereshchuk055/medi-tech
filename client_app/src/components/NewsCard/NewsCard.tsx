import { News } from '../../store/interfaces/entities';
import styles from './NewsCard.module.css';


interface NewsCardProps {
    data: News
}

export default function NewsCard({ data }: NewsCardProps) {
    return (
        <div className={styles.wrapper}>
            <img src={data.photoUrl} alt="News" className={styles.photo} />
            <div className={styles.text}>
                <h2 className={styles.title}>{data.title}</h2>
                <div className={styles.date}>{data.date}</div>
                <div className={styles.author}>{data.author}</div>
                <div className={styles.details}>
                    <p>{data.description}</p>
                    <a href={data.link} className={styles.link}>Read more &rarr;</a>
                </div>
            </div>
        </div>
    );
}
