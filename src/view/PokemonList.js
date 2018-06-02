import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BootstrapTable, TableHeaderColumn, ClearSearchButton } from "react-bootstrap-table";

//actions
import {getPokemonList} from '../actions/pokemonList.action';

class PokemonList extends Component {

    componentDidMount() {
        if(!this.props.pokemonList.length)
            this.props.getPokemonList();
    }

    imageFormatter = (cell, row) => {
        return <img src ={row.sprites.front_shiny} /> ;
    }

    loadNext = () => {
        this.props.getPokemonList(this.props.next);
    }

    render() {
        let { pokemons, next, prev } = this.props;
        let displayPagination = (pokemons && pokemons.length > 20);
        return (
            pokemons.length ?
                <React.Fragment>
                    <BootstrapTable
                        data={pokemons}
                        >
                        <TableHeaderColumn width="30%" isKey={true} dataField="id" dataFormat={this.imageFormatter}>
                            <span>Avatar</span>
                        </TableHeaderColumn>
                        <TableHeaderColumn width="30%" dataField="name" dataSort={true} >
                            <span>Name</span>
                        </TableHeaderColumn>
                        <TableHeaderColumn width="20%" dataField="weight" dataSort={true}>
                            <span>Weight</span>
                        </TableHeaderColumn>
                        <TableHeaderColumn width="20%" dataField="height" dataSort={true}>
                            <span>Height</span>
                        </TableHeaderColumn>
                        
                    </BootstrapTable>
                    <div className="tabel-footer">
                    {
                        next && <span className="next-btn" onClick={this.loadNext} >Load More</span>
                    }
                    </div>
                </React.Fragment>
            :null
        )
    }
}
const mapStateToProps = (reduxState) => ({
    pokemonList: reduxState.pokemonList.list,
    next: reduxState.pokemonList.next,
    prev: reduxState.pokemonList.previous,
    pokemons: reduxState.pokemonListData
});

const mapDispatchToProps = (dispatch) => ({
	getPokemonList: (url) => dispatch(getPokemonList(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);