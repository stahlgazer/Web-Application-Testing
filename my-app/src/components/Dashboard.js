import React, { useState } from 'react';
import { Button } from 'reactstrap';


export default function Dashboard(props) {
    return (
        <div>
            <Button onClick={props.addStrike}>Strike</Button>
            <Button onClick={props.addBall}>Ball</Button>
            <Button onClick={props.addFoul}>Foul Ball</Button>
            <Button onClick={props.addHit}>Hit</Button>
            <Button onClick={props.clear}>Next Inning</Button>
        </div>
    )
}