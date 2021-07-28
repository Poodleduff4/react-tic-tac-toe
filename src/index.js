import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function shit() {
    console.log('piss');
}

class Square extends React.Component {
    piss() {
        console.log('inside')
    }

    render() {
        return (
            // <button className="square" id={this.props.id}>
            //     {}
            // </button>
            <button className="square" id={this.props.id}>{}</button>
        );
    }
}

class Label extends React.Component {
    render() {
        return (
            null
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square id={i} />;
    }

    renderLabel(){
        return<Label />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                {this.renderLabel()}
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
