import { useState, useEffect } from 'react';
import useSWR from 'swr';

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getRandomQuote = (quotes) => {
  if (!quotes || quotes.length === 0) {
    console.error('No quotes provided.');
    return null;
  }

  // Choose a random index
  const randomIndex = Math.floor(Math.random() * quotes.length);

  return quotes[randomIndex];
};

const RandomQuoteCard = () => {
  const { data: quotes, error } = useSWR('https://type.fit/api/quotes', fetcher);
  const [randomQuote, setRandomQuote] = useState(null);

  useEffect(() => {
    if (quotes && quotes.length > 0 && !randomQuote) {
      const initialRandomQuote = getRandomQuote(quotes);
      setRandomQuote(initialRandomQuote);
    }
  }, [quotes, randomQuote]);

  const generateRandomQuote = () => {
    const newRandomQuote = getRandomQuote(quotes);
    setRandomQuote(newRandomQuote);
  };

  if (error) return <div>Error loading quotes</div>;
  if (!quotes) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center h-screen" style={{
      background: 'linear-gradient(180.7deg, rgba(0,213,255,1) 2.5%, rgba(79,255,255,1) 97.7%)',
    }}>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Random Quote Generator</h1>

        {randomQuote && (
          <div className="mb-4">
            <p className="text-lg ">"{randomQuote.text}"</p>
            <p className="text-sm text-gray-600 mt-2">- {randomQuote.author}</p>
          </div>
        )}

        <button
          onClick={generateRandomQuote}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Generate Quote
        </button>
      </div>
    </div>
  );
};

export default RandomQuoteCard;
