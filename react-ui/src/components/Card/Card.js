import React from 'react'
import './Card.css'

class Card extends React.Component {
    constructor(props) {
        super(props)

        this.classes = 'card' //, this.props.card.isFlipped, this.props.card.found]

        this.renderCard = this.renderCard.bind(this);
        this.flipCard = this.flipCard.bind(this);
        this.handleStyle = this.handleStyle.bind(this);
    }

    renderCard() {
        if (this.props.card.isFlipped) {
            return this.props.card.value;
        } else {
            return '?';
        }
    }

    flipCard() {
        this.props.onFlip(this.props.card.id);
    }

    handleStyle() {
        let style = { color: 'black', height: '100px', fontSize: '50px', backgroundColor: 'rgba(200,200,200,0.1)' }
        if (this.props.card.isFlipped) {
            style.color = 'white';
            style.backgroundColor = 'rgba(230,230,230,0.3)';
        }
        if (this.props.card.found) {
            style.backgroundColor = 'rgba(40,240,40,0.3)';
        }
        return style;
    }

    render() {
        // console.log(this.props.card)
        return (
            <div key={this.props.card.id} className='cardContainer'>
                <div className='card' style={this.handleStyle()} onClick={this.flipCard} >{this.renderCard()}</div>
            </div>
        )
    }
}

export default Card;

//onClick={this.flipCard