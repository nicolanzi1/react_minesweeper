import Board from './board';
import React from 'react';
import * as Minesweeper from '../minesweeper';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        const board = new Minesweeper.Board(9, 10);
        this.state = { board: board };
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile) {
        this.setState({ board: this.state.board });
    }

    render() {
        return (
            <div>
                <Board board={this.state.board} updateGame={this.state.updateGame} />
            </div>
        )
    }
}