import React from 'react';


const Game = (props) => {


    return (
        <div>
            <div className='display-games'>

                <h3>Name : {props.name}</h3>

                <div className='backimg'>
                    <img src={props.background} alt={"img"} />
                </div>

                <p>Rating : {props.rating}</p>

                <p>Released date : {props.released}</p>

                    <div className='buttonDelete'>
                        <button onClick={() => props.onDelete(props.id)}>Supprimer un jeu</button>
                    </div>
            </div>
        </div>
    );
};

export default Game;