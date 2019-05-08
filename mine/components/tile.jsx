import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    // this.bombed = false;
    // this.explored = false;
    // this.flagged = false;
    const tile = this.props.tile;
    if (tile.explored) {
        if (tile.bombed) {
            return (<div onClick={this.handleClick} className="tile bombed">B</div>);
        } else {
            const numBombs = tile.adjacentBombCount() === 0 ? "" :tile.adjacentBombCount();
            return (<div onClick={this.handleClick} className="tile revealed">{numBombs}</div>);
        }
    } else if (tile.flagged) {
        return (<div onClick={this.handleClick} className="tile flagged">F</div>);
    }
    else 
        return (<div onClick={this.handleClick} className="tile"></div>);
    } 
  

  handleClick(event) {
      //take in tile/ pos
      const flagged = event.altKey ? true : false
    this.props.fnc(this.props.tile,flagged);
    
  }
}

export default Tile;