import React, { Component } from 'react';
import xGoldShoes from '../img/xGoldShoes.jpg';
import xChelseaBoots from '../img/xChelseaBoots.jpg';
import xLadderSneakers from '../img/xLadderSneakers.jpg';
import xBoots from '../img/xBoots.jpg';

class Recommendations extends Component {
    render() {
    
        return (

            <div class="row same-height-row">
                <div class="col-md-3">
                    <div class="thumbnail">
                        <a href="/">
                            <img src={xGoldShoes} alt="Gold Shoes" style={{ marginRight: '20em' }}></img>
                        </a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumbnail">
                        <a href="/">
                            <img src={xLadderSneakers} alt="Trainers" style={{ marginRight: '20em' }}></img>
                        </a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumbnail">
                        <a href="/">
                            <img src={xChelseaBoots} alt="Chelsea Boots" style={{ marginRight: '20em' }}></img>
                        </a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumbnail">
                        <a href="/">
                            <img src={xBoots} alt="Boots" style={{ marginRight: '20em' }}></img>
                        </a>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Recommendations;
