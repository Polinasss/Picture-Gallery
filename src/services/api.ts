export const fetchData = async () => {
  try {
    const response = await fetch(
      "https://api.unsplash.com/photos/random?client_id=0n_-IWBZO2705_VWltQT23Qq5ydfT-F9QJeCEWvNoCI&count=10"
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchQueryData = async (searchQuery: string) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=0n_-IWBZO2705_VWltQT23Qq5ydfT-F9QJeCEWvNoCI&count=10`
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
