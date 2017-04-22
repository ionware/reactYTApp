import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import Configs from './config/config.js';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_detail.js';

const API_KEY = Configs.YT_API_KEY;

class App extends Component
{
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('redux');
    }

    videoSearch(term){

        YTSearch(
            { term: term, key: API_KEY },
            (videos) => { this.setState({
                videos : videos,
                selectedVideo: videos[0]
            })});
    }

    render(){
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 400);

        return (
            <div>
                <SearchBar videoSearch={(searchTerm) => { videoSearch(searchTerm) } }/>
                <VideoDetails video={ this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={ (video) => { this.setState({selectedVideo: video})} }
                    videos={ this.state.videos }/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));