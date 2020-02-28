import React from 'react';
import { Button } from 'reactstrap';


export default function Dashboard(props) {
    return (
        <div>
            <br />
            <Button data-testid="strike" color="danger" onClick={props.addStrike}>Strike</Button>
            <Button color="primary" onClick={props.addBall}>Ball</Button>
            <Button color="warning" onClick={props.addFoul}>Foul Ball</Button>
            <Button color="info" onClick={props.addHit}>Hit</Button>
            <Button color="success" onClick={props.clear}>Next Inning</Button>
        </div>
    )
}
