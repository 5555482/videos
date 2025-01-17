import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img
                alt={video.snippet.title}
                className="ui image"
                src={video.snippet.thumbnails.medium.url}
            />
            <div className="content">
                <div className="header">
                </div>{video.snippet.title}
            </div>
        </div>
    )
};

export default VideoItem;