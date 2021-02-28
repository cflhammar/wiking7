import React from 'react';
import './App.css';
import Board from '../Board/Board.js'
import HighScore from '../HighScore/HighScore.js'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [{
        value: '',
        id: '',
        isFlipped: false,
        found: false,
      }],

    }

    this.foundCorrect = 0;
    this.flippedCards = 0;
    this.numRounds = 0;
    this.lowestScore = '-';



    this.onFlip = this.onFlip.bind(this);
    this.setBoard = this.setBoard.bind(this);
    this.shuffleBoard = this.shuffleBoard.bind(this);
    this.checkMatch = this.checkMatch.bind(this);
    this.resetFlipped = this.resetFlipped.bind(this);
    this.addRound = this.addRound.bind(this);
    this.checkFinished = this.checkFinished.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.putHighScore = this.putHighScore.bind(this);

  }

  putHighScore(name) {
    if (this.foundCorrect < 8) {

      const backendURL = false ? 'http://localhost:5000/' : 'https://wiking7.herokuapp.com/';
      console.log(backendURL)
      const url = backendURL + 'api/highScore';
      const newEntry = JSON.stringify({ name: name, score: this.numRounds, time: 50 });
      console.log('posting front');
      console.log(newEntry);
      fetch(url, {
        method: 'POST',
        body: newEntry,
        headers: { 'Content-Type': 'application/json' }
      })
      this.setBoard();
    } else {
      alert('You must finish the game before submitting score!')
    }
    //.then(() => {

    //this.getHighScore();
    //this.setState({ name: '' });
    //})

  }

  setBoard() {
    let cardsArray = [];
    let k = 0;
    for (let i = 1; i < 9; i++) {
      cardsArray.push({ value: i, id: k, isFlipped: false, found: false });
      cardsArray.push({ value: i, id: k + 1, isFlipped: false, found: false });
      k = k + 2;
    }
    let shuffledArray = this.shuffleBoard(cardsArray);
    this.setState({ cards: shuffledArray });
    this.foundCorrect = 0;
    this.flippedCards = 0;
    this.numRounds = 0;
  }


  shuffleBoard(cardsArray) {
    let array = cardsArray;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  onFlip(id) {
    let cardsArray = this.state.cards;
    if (this.flippedCards === 2) {
      this.resetFlipped()
    }

    // flip card in card state
    for (let i = 0; i < cardsArray.length; i++) {  // find what card was flipped...
      if (cardsArray[i].id === id) {
        if (cardsArray[i].isFlipped || cardsArray[i].found) {
          break;
        }
        this.flippedCards += 1;
        cardsArray[i].isFlipped = true;

        //        // flip one card
        this.setState({    // update state
          cards: cardsArray,
        }, () => {
          console.log('card flipped');
        });
      }
    }


    if (this.flippedCards === 2) {
      this.checkMatch()
      this.addRound();
      this.checkFinished();
    }
    // check match if there are two flipped cards
    //   }
    // }
  }

  addRound() {
    this.numRounds += 1;
  }

  checkFinished() {
    if (this.foundCorrect === 8) {
      this.updateScore();
    }
  }

  updateScore() {
    if (!this.lowestScore) {
      this.lowestScore = this.numRounds;
    } else if (this.numRounds < this.lowestScore) {
      this.lowestScore = this.numRounds;
    }
  }

  checkMatch() {
    let cardsArray1 = this.state.cards;
    // find what 2 cards that are flipped open
    let openCards = cardsArray1.filter(card => card.isFlipped && !card.found);

    // check if two cards have same value
    if (openCards[0].value === openCards[1].value) {
      // if match update card state to found
      let cardsArray = this.state.cards;
      for (let i = 0; i < cardsArray.length; i++) {
        if (cardsArray[i].value === openCards[0].value) {
          // update state to found
          cardsArray[i].found = true;
        }
      }
      //update state
      this.setState({
        cards: cardsArray
      });
      this.foundCorrect += 1;
      this.flippedCards = 0;
    }

  }

  resetFlipped() {
    let cardsArray = this.state.cards;
    for (let i = 0; i < cardsArray.length; i++) {
      // flip card if not already found
      if (!cardsArray[i].found) {
        cardsArray[i].isFlipped = false;
      }
    }
    // update state and reset flipped cards counter

    this.setState({
      cards: cardsArray
    });
    this.flippedCards = 0;
  }

  componentDidMount() {
    this.setBoard();
  }

  render() {
    return (
      <div className='outerContainer' >

        <div className='gameContainer'>
          <Board onLoad={this.setBoard} onFlip={this.onFlip} cards={this.state.cards} />
        </div>

        <div className='menuScoreContainer'>

          <div className='menuContainer'>
            <div className='dataBar'>            <button className='start-button' onClick={() => {
              this.setBoard()
            }
            }>Restart</button>
            </div>

            <div className='dataBar'>
              <p>Time:</p>
              <p> 00</p>
            </div>


            <div className='dataBar'>
              <p>Round:</p>
              <p> {this.numRounds}</p>
            </div>

            <div className='dataBar'>
              <p>Correct:</p>
              <p> {this.foundCorrect} / 8</p>
            </div>



            <div className='dataBar'>
              <p>Best score: </p>
              <p>{this.lowestScore ? this.lowestScore : '-'}</p>
            </div>
          </div>
          <div className='highScoreContainer'>
            <HighScore addHighScore={this.putHighScore} />
          </div>
        </div>

      </div>
    );
  }

}


export default App;