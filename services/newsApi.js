const API_KEY = process.env.EXPO_PUBLIC_NEWS_API_KEY;

export const getNews = async () => {
  try {

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );

    const data = await response.json();

    return data.articles;

  } catch (error) {
    console.log(error);
    return [];
  }
};