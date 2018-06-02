import React from 'react';
import { connect } from 'react-redux';
import Modal from "react-modal";

//actions
import {getPokemonList, getPokemon} from '../actions/pokemonList.action';

const customStyles = {
    content: {
        width: "50%",
        padding: "0",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        overflow: "hidden"
    },
    overlay: {
        position: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.6)"
    }
};

class Home extends React.Component {

    state = {
        showRandomPokemon: false
    }

    componentDidMount() {
        if(!this.props.pokemonList.length)
            this.props.getPokemonList();
    }

    openPokemon = () => {
        this.props.getPokemon(Math.floor(Math.random() * 800));
        this.setState({
            showRandomPokemon: true
        })
    }

    render() {
        let { randomPokemon } = this.props;
        let { showRandomPokemon } = this.state;
        return (
            <React.Fragment>
                <div class="home-wrapper">
                    <div onClick={this.openPokemon} class="pokeball">
                        <div class="pokeball__button"></div>
                    </div>
                    <span onClick={this.openPokemon} className="gen-new">Get Random Pokemon</span>
                </div>
                <Modal
                isOpen={showRandomPokemon}
                style={customStyles}
                contentLabel="Modal">
                <div className="modal-container">
                    <div className = "modal-header">
                        <span onClick={()=>{ this.setState({showRandomPokemon: false}) } }>close</span>
                    </div>
                    {
                        randomPokemon.data && Object.keys(randomPokemon.data).length && randomPokemon.data.id &&
                        <div className="pokemon-container">
                            <img src={randomPokemon.data.sprites.front_shiny} />
                            <h2>{randomPokemon.data.name}</h2>
                        </div>
                    }
                </div>
            </Modal>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    pokemonList: reduxState.pokemonList.list,
    randomPokemon: reduxState.randomPokemon
});

const mapDispatchToProps = (dispatch) => ({
    getPokemonList: () => dispatch(getPokemonList()),
    getPokemon:  (id) => dispatch(getPokemon(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
