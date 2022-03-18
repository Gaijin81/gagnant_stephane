import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"

const GameDetails = () => {

    const { id } = useParams()
    const [unikgame, setUnikgame] = useState({})

    useEffect(() => {

        axios.get(`https://apis.wilders.dev/wild-games/games/${id}`)
            .then(response => setUnikgame(response.data))
            .catch(error => console.log(error))
    }, [id])


    return (
        <div>

            <h3>Name : {unikgame.name}</h3>

            <img src={unikgame.background_image} alt="img" />

            <p>Rating : {unikgame.rating}</p>

            <p>Released date : {unikgame.released}</p>

        </div>
    );
};

export default GameDetails;