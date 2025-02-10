export async function getMovies(query: string): Promise<any> {
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`;
    // console.log(import.meta.env);
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`
            }
        });
        /*         if (!response.ok) {
                    throw new Error(`${response}`);
                } */
        const data = await response.json();
        // console.log(data);  // This will print the whole API response
        // console.log("test")
        // return response;
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
