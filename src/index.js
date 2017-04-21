import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Configs from './config/config.js';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'

const API_KEY = Configs.YT_API_KEY;

class App extends Component
{
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch(
            {term: 'surfboard', key: API_KEY},
            (videos) => { this.setState({ videos})});
    }

    render(){
        return (
            <div>
                <SearchBar/>
                <VideoList videos={ this.state.videos }/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));