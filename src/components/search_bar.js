import React, { Component } from 'react';

class SearchBar extends Component
{
    constructor(props){
        super(props);

        this.state = {term: ''};
    }

    render() {
        return (<input onChange={(event) => { this.onInputChange(event) } }/>);
    }

    onInputChange(event){
        this.setState({ term: event.target.value });

        this.props.videoSearch(this.state.term);
    }
}

export default SearchBar;