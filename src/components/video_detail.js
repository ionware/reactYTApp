import React from 'react';

const VideoDetails = ({ video }) => {
    if(!video){
        return <span>Wating for a video to play...</span>;
    }
    const videoId = video.id.videoId;
    const url = `https://youtube.com/embed/${videoId}`;

    return (
      <div className="video-detail col-md-8">
          <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={url}></iframe>
          </div>

          <div className="details">
              <div><h4>{ video.snippet.title }</h4></div>
              <div>{ video.snippet.description }</div>
          </div>
      </div>
    );
}

export default VideoDetails;