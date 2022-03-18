import React, { useState, useEffect } from 'react';
import axios from "axios";
import Game from './Game';

const GameList = () => {

    const [gamelist, setGamelist] = useState([])
    const [on, setOn] = useState(false);
    const [refresh, setRefresh] = useState(false)

    const click = () => {
        setOn(!on)
        if (on) {
            filterRating()
        } else {
            setRefresh(!refresh)
        }
    }

    useEffect(() => {
        axios.get("https://apis.wilders.dev/wild-games/games")
            .then(response => setGamelist(response.data))
            .catch(error => console.log(error))
    }, [refresh])

    // filtre qui permet de filtrer les scores//

    const filterRating = () => {
        const sortedRating = gamelist.filter(game => {
            return game.rating >= 4.5
        })
        setGamelist(sortedRating)
    }

    //filtre qui permet de supprimer jeu par jeu //

    const deleteId = (id) => {
        const sortedId = gamelist.filter(game => {
            return game.id !== id
        })
        setGamelist(sortedId)
    }
    return (
        <div>

            <button onClick={() => click()}>Best Games {on ? 'Activé' : 'Désactivé'}</button>


            {gamelist.map((game, index) => {
                return <Game key={index} id={game.id} name={game.name} background={game.background_image} rating={game.rating} released={game.released} onDelete={deleteId} />
            })
            }

        </div>
    );
};

export default GameList;