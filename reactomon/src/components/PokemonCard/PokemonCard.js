import React from "react";
import "./PokemonCard.css";

class PokemonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hp: 0}
    }

    componentDidMount(){
            this.setState({hp: this.props.PokemonHP});
        }
        attack = () => {
        let randomNumber = Math.floor(Math.random() * (31 - 1) + 1);
            this.setState({
                hp: this.state.hp - randomNumber
            }, function(){
                if(this.state.hp <= 0){
                    this.setState({
                        hp: 0,
                    })
                }
            });
        }




    render(){
        let types = this.props.PokemonType.map(function(type) {
            return <span className={`PokemonCard__type PokemonCard__type--${type}`}>{type}</span>
        });
        return (
            <article className="PokemonCard">
                <header className="PokemonCard__header">
                    <h2 className="PokemonCard__title">{this.props.PokemonName}</h2>
                    <div className="PokemonCard__labelWrapper">
                        {types}
                    </div>

                </header>
                <section className="PokemonCard__section">
                    <figure className="PokemonCard__figure">
                        <img src={this.props.PokemonImage} alt="" className="PokemonCard__img"/>
                    </figure>
                    <div className="PokemonCard__h3Wrapper">
                        <h3 className="PokemonCard__HP">{this.state.hp}</h3>
                    </div>

                </section>
                <footer className="PokemonCard__footer">
                    <button onClick={this.attack} className="PokemonCard__button PokemonCard__button--Attack">Attack </button>
                    <button className="PokemonCard__button PokemonCard__button--Catch">
                        Catch
                    </button>
                </footer>
            </article>

        );
    }
}

export default PokemonCard;