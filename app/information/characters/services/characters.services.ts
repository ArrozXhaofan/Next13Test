import { Character } from "../models";

export async function getCharacters(): Promise<Character[]> {
    
    const url = `https://rickandmortyapi.com/api/character`

    return fetch(url)
    .then(res => res.json())
    .then(data => data.results)
}