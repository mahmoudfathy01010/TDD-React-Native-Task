import { AxiosInstance } from "axios";
import { useEffect, useState } from "react";
import { Movie } from "../model/movie";
import { popular } from "../utils/https";
import env from 'react-native-config';


const useMovies = (api: AxiosInstance) => {

    const [status, setStatus] = useState(Status.Loading)
    const [movies, setMovies] = useState<Movie[]>([])

    const getMoviesFromApi = async () => {
        setStatus(Status.Loading)
        try {
            const response = await api.get(popular, {params:{api_key: env.API_KEY }})
            let moviesData: Movie[] = response.data.results;
            setMovies(moviesData);
            setStatus(Status.Success)
        }
        catch (e) {
            setStatus(Status.Error)
        }

    }
    useEffect(() => {
        getMoviesFromApi();
    }, [])

    return {status, movies}}

export default useMovies;

enum Status {
    Loading = "loading",
    Error = "error",
    Success =  "Success"
}