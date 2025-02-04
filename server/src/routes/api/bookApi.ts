// // This function will call the Google Books API
// export async function getBooks(query: string): Promise<any> {
//     const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error;
//     }
// }

export async function getBooks(query: string): Promise<void> {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);  // This will print the whole API response
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}