
import NewsCard from '../components/NewsCard/NewsCard';
import { useTypedSelector } from '../hooks/storeHooks';
import { useEffect, useRef } from 'react';
// import { setNews } from '../store/slices/news';
import { apiRequest } from '../store/query';

export default function News() {

    const apiCallStartTimeRef = useRef(0);

    useEffect(() => {
        apiCallStartTimeRef.current = Date.now();

        const fetchData = async () => {
            try {
                await apiRequest("news/news/");
                
                const apiCallEndTime = Date.now();
                const apiCallDuration = apiCallEndTime - apiCallStartTimeRef.current;

                console.log(`API виклик зайняв ${apiCallDuration} мс`);
            } catch (error) {
                console.error('Помилка під час виклику API:', error);
            }
        };

        fetchData();
    }, []);

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
