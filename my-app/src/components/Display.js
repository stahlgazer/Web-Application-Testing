import React from 'react';

export default function Display(props) {
    return (
        <div>
            <br />
            <p data-testid="displayStrikes">Strikes: {props.strikes}</p>
            <p>Balls: {props.balls}</p>
            <p>Foul Balls: {props.foul}</p>
            <p>Hits: {props.hit}</p>
        </div>
    )
}