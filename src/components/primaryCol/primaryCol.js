//importar los modulos que se Ocupan
import React from 'react';

//importar los componentes que s eocupan
import PostTweet from '../postTweet/postTweet';
import TweetContainer from '../tweetContainer/tweetContainer'

const PrimaryCol = (props) => {
    return (
        <div className = "t-col-container">
            <div className = "t-col-head">
                <h3>Inicio</h3>
                <PostTweet profileUrl = {props.profileUrl} />
            </div>
            <TweetContainer/>
        </div>
    )
}

export default PrimaryCol;