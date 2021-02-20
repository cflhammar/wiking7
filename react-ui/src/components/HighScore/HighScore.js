import React from 'react'
import './HighScore.css'

class HighScore extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            toplist: [],
            name: ''
        }

        this.backendURL = 'http://localhost:3001/api'

        this.getHighScore = this.getHighScore.bind(this);
        this.renderToplist = this.renderToplist.bind(this);
        this.addHighScore = this.addHighScore.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    getHighScore() {
        const url = this.backendURL + '/highScore'
        fetch(url, { "headers": { "Content-Type": "application/json" } },)
            .then(response => {
                return response.json()
            }).then(jsonData => {
                //   console.log(jsonData)
                this.setState({
                    toplist: jsonData
                }
                )
            }
            );
    }

    addHighScore() {
        if (this.state.name) {
            this.props.addHighScore(this.state.name);
            this.getHighScore();
            //  this.setState({ name: '' });
        } else {
            alert('Enter name before submitting!')
        }

    }

    renderToplist() {
        const highScore = this.state.toplist;
        const toplist = highScore.map((entry, index) => {

            return (<tr key={index}>
                <td key={index + 1}>{index + 1}</td>
                <td key={index + 2} className='table-name'>{entry.name}</td>
                <td key={index + 3} >{entry.score}</td>
            </tr>)
        }
        )

        return (
            <table className='toplistTable' >
                <thead><tr><th>Pos</th><th>Name</th><th>Score</th></tr></thead>
                <tbody>{toplist}</tbody>
            </table>)
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value })
    }

    componentDidMount() {
        this.getHighScore();
    }

    render() {

        return (
            <div className='toplist'>
                <div className='input'>
                    <input
                        placeholder="Enter your name"
                        onChange={this.handleNameChange}
                    />
                    <button type='submit' onClick={this.addHighScore}>Add Score</button>

                </div>
                <h3>Toplist:</h3>
                {this.renderToplist()}

            </div>
        )
    }
}

export default HighScore;

