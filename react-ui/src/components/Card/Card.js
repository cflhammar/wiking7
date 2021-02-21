import React from 'react'
import './Card.css'
import img0 from './images/img0.png'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import img5 from './images/img5.png'
import img6 from './images/img6.png'
import img7 from './images/img7.png'
import img8 from './images/img8.png'
const images = [img0, img1, img2, img3, img4, img5, img6, img7, img8]

class Card extends React.Component {
    constructor(props) {
        super(props)

        this.classes = ['card-image', this.props.card.isFlipped, this.props.card.found]

        this.renderCard = this.renderCard.bind(this);
        this.flipCard = this.flipCard.bind(this);
        this.handleStyle = this.handleStyle.bind(this);
    }

    renderCard() {
        if (this.props.card.isFlipped) {
            return images[this.props.card.value];
        } else {
            return images[0];//this.props.card.value;;
        }
    }

    flipCard() {
        this.props.onFlip(this.props.card.id);
    }

    handleStyle() {
        let style = { color: 'grey' }
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
            <th key={this.props.card.id} className='Card'>

                <img alt='Card' className={this.classes}  /*style={this.handleStyle()} */ onClick={this.flipCard} src={this.renderCard()} />
            </th>
        )
    }
}

export default Card;

//onClick={this.flipCard