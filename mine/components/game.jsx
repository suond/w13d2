import React from 'react';
import { Board, Tile } from "./minesweeper";

import BoardComponent from "./board";

class Game extends React.Component{

    constructor(props){
        super(props)
        const board = new Board(8, 3);
        this.state = {
            board: board
        }
        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }

    updateGame(tile, flagged){
        if (flagged){
            tile.toggleFlag();
        } else {
            tile.explore();
        }
        this.setState({board: this.state.board});
        
    }
    render(){
        //handle win and lost logic
        let modal;
        if (this.state.board.lost() || this.state.board.won()){
            let content = this.state.board.lost() ? "You lose" : "You win"
             modal = (
                        <div className="modal-screen is-active">
                            <div className="modal-content">
                            <span className="dx" onClick={ ()=> {document.querySelector(".modal-screen").classList.remove("is-active")} }>&times;</span>
                            {content} click button to try again.
                            <button onClick={this.restartGame}>Replay</button>
                            </div>
                        </div>
                    )
        }
        return (
            <div>
                {modal}
                <BoardComponent 
                board={this.state.board}
                fnc={this.updateGame}
                />
                
            </div>
        );
    }

    restartGame(){
        const board = new Board(8, 3);
        this.setState({board: board});
    }

}

export default Game;