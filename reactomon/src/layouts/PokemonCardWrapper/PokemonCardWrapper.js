import PokemonCard from "../../components/PokemonCard/PokemonCard"
import "./PokemonCardWrapper.css"
function PokemonCardWrapper(){
    return(
        <section className="PokemonCardWrapper">
            <PokemonCard
                PokemonName="Wooper"
                PokemonType={["Water", "Ground"]}
                PokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png"
                PokemonHP="55"
            />
            <PokemonCard
                PokemonName="Charmeleon"
                PokemonType={["Fire"]}
                PokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
                PokemonHP="80"
            />
            <PokemonCard
                PokemonName="Pikachu"
                PokemonType={["Electric"]}
                PokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                PokemonHP="90"
            />
            <PokemonCard
                PokemonName="Nidorina"
                PokemonType={["Poison"]}
                PokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"
                PokemonHP="70"
            />
        </section>
    )


}

export default PokemonCardWrapper;