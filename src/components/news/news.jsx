// src/components/NewsList.js
import useSWR from 'swr';

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.articles;
};

const NewsList = () => {
  const apiKey = '1e21ec4a30f34c12b38dc74dbd2001d7';
  const apiEndpoint = 'https://newsapi.org/v2/everything';
  const domains = 'techcrunch.com,thenextweb.com';
  const apiUrl = `${apiEndpoint}?domains=${domains}&apiKey=${apiKey}`;

  const { data: news, error } = useSWR(apiUrl, fetcher);

  if (error) {
    return <div>Error fetching news data</div>;
  }

  if (!news) {
    return <div>Loading...</div>;
  }

  const convertToBangkokTime = (utcDateString) => {
    const utcDate = new Date(utcDateString);
    const bangkokTime = utcDate.toLocaleString('en-US', {
      timeZone: 'Asia/Bangkok',
      hour12: false,
    });
    return bangkokTime;
  };

  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center md:text-left">
        <h2 className="mb-12 text-center text-3xl font-bold">Latest News</h2>
        
        <div className="grid items-center gap-x-6 md:grid-cols-3 xl:gap-x-12">
          {news.map((article, index) => (
            <div key={index} className={`mb-6 md:mb-0 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
                <img src={article.urlToImage} className="w-full" alt={article.title} />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                </a>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-bold">{article.title}</h3>

                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                <small>Published <u>{convertToBangkokTime(article.publishedAt)}</u> by <a href="#!">{article.author}</a></small>
                </p>
                
                <p className="text-neutral-500 dark:text-neutral-300">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsList;
