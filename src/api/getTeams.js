const API_URL = 'https://www.thesportsdb.com/api/v1/json/123/lookuptable.php?l=4328&s=2024-2025';

export async function getTeams() {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    return data.table ?? [];
  } catch (error) {
    console.error('Błąd podczas pobierania drużyn:', error);
    return [];
  }
}