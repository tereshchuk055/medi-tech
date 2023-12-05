
import NewsCard from '../components/NewsCard/NewsCard';
import styles from './page.module.css';
import { useState } from 'react';



interface News {
    id: number;
    title: string,
    description: string,
    author: string,
    photoPath: string,
    date: string,
    link: string
}

const defaulNewstValues: News[] = [
    {
        id: 0, title: 'Lorem ipsum dolor sit amet consectetur', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla rem sequi laborum quod fugit',
        author: 'William Halsted', photoPath: 'https://www.usaimmigrationapplication.org/wp-content/uploads/sites/8/medicine-usa.jpg',
        date: 'Jan 29, 2018', link: "https://zaxid.net/meditsina_tag50837/"
    },
    {
        id: 1, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla rem sequi laborum quod fugit',
        author: 'William Halsted', photoPath: 'https://news.microsoft.com/wp-content/uploads/prod/sites/46/2021/03/HLS19_healthcare2Hologram_001-1600x1067.jpg',
        date: 'Jan 29, 2018', link: "https://zaxid.net/meditsina_tag50837/"
    },
    {
        id: 2, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla rem sequi laborum quod fugit',
        author: 'William Halsted', photoPath: 'https://medvestnik.by/images/images_category/Personalizaciya-mediciny.webp',
        date: 'Jan 29, 2018', link: "https://zaxid.net/meditsina_tag50837/"
    },
    {
        id: 3, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla rem sequi laborum quod fugit',
        author: 'William Halsted', photoPath: 'https://jnj.ru/wp-content/uploads/2018/04/Depositphotos_65281749_m-2015_833_512.jpg',
        date: 'Jan 29, 2018', link: "https://zaxid.net/meditsina_tag50837/"
    },
    {
        id: 4, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla rem sequi laborum quod fugit',
        author: 'William Halsted', photoPath: 'https://news.microsoft.com/wp-content/uploads/prod/sites/46/2021/03/DTHC-hero-1600x1063.jpg',
        date: 'Jan 29, 2018', link: "https://zaxid.net/meditsina_tag50837/"
    },
    {
        id: 5, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam obcaecati ex natus nulla rem sequi laborum quod fugit',
        author: 'William Halsted', photoPath: 'https://antiage-expert.com/upload/medialibrary/3d5/3d51794b6c72a9c33d774bb87d6861f5.jpg',
        date: 'Jan 29, 2018', link: "https://zaxid.net/meditsina_tag50837/"
    }
]



export default function News() {

    const [news] = useState<News[]>(defaulNewstValues);


    return (
        <>
            <div className={styles.container}>
                {news.map(n =>
                    <NewsCard key={n.id} title={n.title} description={n.description} author={n.author} photoPath={n.photoPath} date={n.date} link={n.link} />
                )}
            </div>
        </>
    )
}
