// import dotenv from 'dotenv/config';

export const fetchCatImages = async () => {
  const url = `https://api.thecatapi.com/v1/images/search?limit=20`;
  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': process.env.DEMO_API_KEY,
      },
    });
    const data = await response.json();
    return console.log(data);
  } catch (error) {
    console.log(error);
    return [];
  }
};
