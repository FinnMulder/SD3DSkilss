import React from "react";
import "./CounterCard.css";

class CounterCard extends React.Component{
    //als een counter in dit geval, wordt aangemaakt danvoert de constructor zichzelf uit
    constructor(){
        super();
        this.state = {number:0};
    }
     increase = () =>{
         this.setState({number: this.state.number +1});
    }
     decrease = () =>{
         this.setState({number: this.state.number -1});
    }
    render(){
        console.log("ik ben gerenderd");
        return (
            <article class="counter">
                <section class="counter__number">
                    <h1 class="counter__value" id="js--number">{this.state.number}</h1>
                </section>
                <section class="counter__buttons">
                    <button onClick={this.decrease} className="counter__button counter__button--Decrease">Decrease</button>
                    <button onClick={this.increase} className="counter__button counter__button--Increase">Increase</button>
                </section>
            </article>
        );
    }


}
export default CounterCard;