//fetch request to /api/users/:id
export const getUserById = async (id: number) => {
    try {
        const response = await fetch(`/api/users/${id}`);
        if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
    };
