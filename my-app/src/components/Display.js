import React, { useState } from 'react';

export default function Display(props) {
    return (
        <div>
            <p>Strikes: {props.strikes}</p>
            <p>Balls: {props.balls}</p>
            <p>Foul Balls:{props.foul}</p>
            <p>Hits: {props.hit}</p>
        </div>
    )
}