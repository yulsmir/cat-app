const api_key = 'DEMO_API_KEY';

export const fetchCatImages = async () => {
  const url = `https://api.thecatapi.com/v1/images/search?limit=20`;
  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': api_key,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
