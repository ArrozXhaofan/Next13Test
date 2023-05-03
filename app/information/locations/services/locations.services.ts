import { Location } from "../models"

export async function getLocations():Promise<Location[]> {
    
    const url = `https://rickandmortyapi.com/api/location`
    return fetch(url)
    .then(res => res.json())
    .then(data => data.results)
}