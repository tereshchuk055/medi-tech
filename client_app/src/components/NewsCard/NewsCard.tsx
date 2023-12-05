import styles from './NewsCard.module.css';


interface NewsCardProps {
    title: string,
    description: string,
    author: string,
    photoPath: string,
    date: string,
    link: string
}

export default function NewsCard({title, description, author, photoPath, date, link }: NewsCardProps) {
    return (
        <div className={styles.wrapper}>
            <img src={photoPath} alt="News" className={styles.photo} />
            <div className={styles.text}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.date}>{date}</div>
                <div className={styles.author}>{author}</div>
                <div className={styles.details}>
                    <p>{description}</p>
                    <a href={link} className={styles.link}>Read more &rarr;</a>
                </div>
            </div>
        </div>
    );
}
