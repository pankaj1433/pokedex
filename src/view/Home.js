import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BootstrapTable, TableHeaderColumn, ClearSearchButton } from "react-bootstrap-table";

//actions
import {getPokemonList} from '../actions/pokemonList.action';

class Home extends Component {

    componentDidMount() {
        if(!this.props.pokemonList.length)
            this.props.getPokemonList();
    }

    imageFormatter = (cell, row) => {
        console.log('row>>',row)
        return <img src ={row.sprites.front_shiny} /> ;
    }

    render() {
        const options = {
            page: 1,
            sizePerPage: 20,
            pageStartIndex: 1,
            paginationSize: 3,
            prePage: "< Prev",
            nextPage: "Next >",
            hideSizePerPage: true,
            alwaysShowAllBtns: true,
            withFirstAndLast: false,
            defaultSortName: 'name',
            defaultSortOrder: 'asc',
            clearSearch: true,
        };
        let { pokemons } = this.props;
        let displayPagination = (pokemons && pokemons.length > 20);
        return (
            pokemons.length ?
                <BootstrapTable
                    data={pokemons}
                    width=""
                    pagination={displayPagination}
                    search={true}
                    searchPlaceholder="Search (e.g. by name)"
                    // ref={(node) => this.driverTable = node}
                    options={options}>
                    <TableHeaderColumn isKey={true} dataField="id" dataFormat={this.imageFormatter}>
                        <span>Avatar</span>
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="name" dataSort={true} >
                        <span>Name</span>
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="weight" dataSort={true}>
                        <span>Weight</span>
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="height" dataSort={true}>
                        <span>Height</span>
                    </TableHeaderColumn>
                    
                </BootstrapTable>
            :null
        )
    }
}
const mapStateToProps = (reduxState) => ({
    pokemonList: reduxState.pokemonList.list,
    pokemons: reduxState.pokemonListData
});

const mapDispatchToProps = (dispatch) => ({
	getPokemonList: () => dispatch(getPokemonList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);