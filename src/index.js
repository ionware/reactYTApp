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

        this.videoSearch('latest');
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
                <div className="row" id="search">
                    <div className="col-sm-6 col-sm-offset-3 align-self-center">
                        <SearchBar videoSearch={(searchTerm) => { videoSearch(searchTerm) } }/>
                    </div>
            </div>
            <div className="row">

            </div>
                <VideoDetails video={ this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={ (video) => { this.setState({selectedVideo: video})} }
                    videos={ this.state.videos }/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
