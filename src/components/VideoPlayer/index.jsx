/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import videojs from 'video.js';
import './index.css';

export default class VideoPlayer extends React.Component {
  componentDidMount() {
    videojs.Hls.xhr.beforeRequest = function (options) {
      options.uri = `${options.uri}${videojs.getAllPlayers()[0].options().token}`;
      return options;
    };
    this.player = videojs(this.videoNode, this.props);
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <div>
        <div data-vjs-player>
          <video ref={(node) => { this.videoNode = node; }} className="video-js" />
        </div>
      </div>
    );
  }
}

