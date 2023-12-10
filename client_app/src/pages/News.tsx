
import NewsCard from '../components/NewsCard/NewsCard';
import { useTypedSelector } from '../hooks/storeHooks';


export default function News() {

    const { data } = useTypedSelector((state) => state.news);


    return (
        <>
            <div className="bg-gray-100 flex flex-wrap justify-between p-10 dark:bg-neutral-900">
                {data.map(n =>
                    <NewsCard key={n.id} data={n} />
                )}
            </div>
        </>
    )
}
