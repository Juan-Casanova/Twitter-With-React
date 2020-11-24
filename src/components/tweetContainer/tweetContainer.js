//Se importa los modulos que se necesitan
import React from 'react';

//Se importa los componentes y codigos a utilizar
import Tweet from '../tweet/tweet';
import {feed} from '../../source';

class TweetContainer extends React.Component{

    constructor() {
        super();
        this.state = {
            tweets : feed
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.tweets.map( tweet=> {
                        return (
                            <Tweet
                                profile = {tweet.profile}
                                profileUrl = {tweet.profileUrl}
                                username = {tweet.username}
                                content = {tweet.content}
                                reactions = {tweet.interaction}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default TweetContainer;