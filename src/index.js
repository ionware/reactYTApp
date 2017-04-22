import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Configs from './config/config.js';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_detail.js';

const API_KEY = Configs.YT_API_KEY;

class App extends Component
{
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch(
            {term: 'reactJs', key: API_KEY},
            (videos) => { this.setState({ videos})});
    }

    render(){
        return (
            <div>
                <SearchBar/>
                <VideoDetails video={ this.state.videos[1]}/>
                <VideoList videos={ this.state.videos }/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));