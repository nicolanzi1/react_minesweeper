import React from 'react';

export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const flagged = e.altKey ? true : false;
        this.props.updateGame(this.props.tile, flagged);
    }

    render() {
        const tile = this.props.tile;
        let klass, text, count;
        if (tile.explored) {
            if (tile.bombed) {
                klass = 'bombed';
                text = '\U+1F4A3';
            } else {
                klass = 'explored';
                count = tile.adjacentBombCount();
                text = (count > 0 ? `${count} ` : "");
            }
        } else if (tile.flagged) {
            klass = 'flagged';
            text = '\U+1F6A9';
        } else {
            klass = 'unexplored';
        }
        klass = `tile klass${klass}`;

        return (
            <div className={klass}
                onClick={this.handleClick}>
                {text}
            </div>
        )
    }
}