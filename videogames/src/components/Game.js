import React from 'react';
import { Link } from 'react-router-dom';

const Game = (props) => {

    return (
        <div>
            <Link to={`/games/${props.id}`}>

                <h3>Name : {props.name}</h3>

            </Link>

            <img src={props.background} alt="img" />

            <p>Rating : {props.rating}</p>

            <p>Released date : {props.released}</p>


            <button onClick={() => props.onDelete(props.id)}>Supprimer un jeu</button>
        </div>
    );
};

export default Game;