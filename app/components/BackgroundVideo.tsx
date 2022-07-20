import React from 'react';
import ReactPlayer from 'react-player';
type Props = {
  videoSource: string;
  children: React.ReactNode;
};

const BackgroundVideo: React.FC<Props> = ({ videoSource, children }) => {
  return (
    <div className="relative">
      <div className="player-wrapper">
        <div className="absolute top-0 z-30 w-full">{children}</div>
      
       <div> 
         <div className="z-20 video-overlay"></div>
       <ReactPlayer
          muted={true}
          loop={true}
          playing={true}
          className="react-player"
          url={videoSource}
          width="100%"
          height="100%"
        />
        </div> 
      </div>
    </div>
  );
};

export default BackgroundVideo;
