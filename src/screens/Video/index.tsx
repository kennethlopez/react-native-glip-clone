import React from "react";
import {Text} from "react-native-paper";
import VideoAppBar from "../../components/VideoAppBar";

const VideoScreen: React.FC = () => {
    return (
        <>
            <VideoAppBar />
            <Text>Video</Text>
        </>
    );
}

export default VideoScreen;
