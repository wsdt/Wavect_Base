import {Challenge} from "../models/Challenge";


export async function fetchChallenge(url: string) : Promise<Challenge> {
    let res = await fetch(url)
    return (await res.json()) as Challenge
}