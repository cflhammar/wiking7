import React from 'react';
import Card from '../Card/Card';
import './Board.css'

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
            <div key={i} className='rowCardContainer' >
                <Card key={this.props.cards[i].id} onFlip={this.props.onFlip} card={this.props.cards[i]} />
                <Card key={this.props.cards[i + 1].id} onFlip={this.props.onFlip} card={this.props.cards[i + 1]} />
                <Card key={this.props.cards[i + 2].id} onFlip={this.props.onFlip} card={this.props.cards[i + 2]} />
                <Card key={this.props.cards[i + 3].id} onFlip={this.props.onFlip} card={this.props.cards[i + 3]} />
            </div>
        );
    }

    render() {

        //let max = 16;
        //this.setBoard(max);
        if (this.props.cards.length > 5) {
            return (
                <div className='RowContainer'>
                    {[0, 4, 8, 12].map(number => this.renderRow(number))}
                </div>
            );
        }
        return <p></p>
    }
}

export default Board;