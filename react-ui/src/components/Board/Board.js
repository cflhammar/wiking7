import React from 'react';
import Card from '../Card/Card'

class Board extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            flipCounter: 0
        }
        this.renderRow = this.renderRow.bind(this);
    }

    renderRow(i) {
        return (
        <tr key={i}>
            <Card key={this.props.cards[i].id} onFlip={this.props.onFlip}  card={this.props.cards[i]}/>
            <Card key={this.props.cards[i+1].id} onFlip={this.props.onFlip}  card={this.props.cards[i+1]}/>
            <Card key={this.props.cards[i+2].id} onFlip={this.props.onFlip}  card={this.props.cards[i+2]}/>
            <Card key={this.props.cards[i+3].id} onFlip={this.props.onFlip}  card={this.props.cards[i+3]}/>
        </tr>
        );
    }

    render() {

        //let max = 16;
        //this.setBoard(max);
        if (this.props.cards.length > 5) {
        return (
            <table className='Gameboard'>
                <tbody>

                {[0,4,8,12].map(number=>this.renderRow(number))}
                </tbody>
            </table>
        );
    }
    return <p></p>
    }
}

export default Board;