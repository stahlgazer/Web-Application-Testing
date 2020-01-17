import React, { useState } from 'react';

export default function Dashboard(props) {
    return (
        <div>
            <button onClick={props.addStrike}>Strike</button>
            <button onClick={props.addBall}>Ball</button>
            <button onClick={props.addFoul}>Foul Ball</button>
            <button onClick={props.addHit}>Hit</button>
            <button onClick={props.clear}>Next Inning</button>
        </div>
    )
}