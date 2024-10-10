export async function getCharacterById(id) {
    try {
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);
        if (!response.ok) 
        {
            throw new Error('Character not found.');
        }
        const character = await response.json();
        return {character, error: null};
    } 
    catch (error) {
        //console.error('Error fetching character:', error);
        return { 
             character: null, error: error.message
        };
    }
}

export async function searchCharacterByName(name) {
    try {
        const response = await fetch(`https://swapi.dev/api/people/?search=${name}`);
        if (!response.ok) 
        {
            throw new Error('Search failed');
        }
        const data = await response.json();
        return data.results.length ? { character: data.results[0], error: null } : { character: null, error: 'Character not found' };
    } 
    catch (error) 
    {
        return { 
            character: null, error: error.message
        };
    }
}