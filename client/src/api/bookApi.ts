export async function addFavoriteBook(title: string, userId: number): Promise<any> {
    const url = '/api/favorites/books';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, userId}),
        });
        if (!response.ok) {
            throw new Error(`${response}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding favorite book:', error);
        throw error;
    }
}
