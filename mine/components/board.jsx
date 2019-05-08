import React from 'react';
import Tile from './tile';
 
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        arrayOfRows: null
    };
  }

  componentDidMount(){
      console.log(this.props.board.grid.length)
        
    
  }

  render() {
    const arrayOfRows = this.props.board.grid.map( (row, idxr) => {
        return (
            <div key={idxr} className="row">
                {row.map( (tile, idxt) => { 
                    return <Tile tile={tile} fnc={this.props.fnc} key={idxt} />
                })}
            </div>
        )
    });
    
    return (
      <div id="board">
        {arrayOfRows}
      </div>
    );
  }
}

export default Board;