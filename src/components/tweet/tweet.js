//Importar los moduos a utilizar
import React from 'react';

//Importar links externos
import {HeartOutline, ShareOutline, ChatOutline, DotsHorizontalOutline} from '@graywolfai/react-heroicons';

//Importar componentes o estilos
import './styles.css'

class Tweet extends React.Component {
    constructor() {
        super();
        this.state ={

        }
    }

    render() {
        return (           
            <div className = "tweet-container">
                
                <div className = "tweet-options-container">
                    <div className="tweet-options" >
                        <DotsHorizontalOutline/>
                    </div>
                </div>

                <div className = "row">
                    <div className = "c1">
                        <img src={this.props.profileUrl} alt="profile"/>
                    </div>
                    <div className = "c2">
                        <h6>{this.props.profile}</h6>
                        <h6>{this.props.username}</h6>
                    </div>
                </div>

                <div className = "row content-container">
                    <p className = "content">
                        {this.props.content}
                    </p>
                </div>

                <div className = "reactions">
                    
                    <div className = "comments">
                        <ChatOutline />
                        <span>{this.props.reactions.comments}</span>
                    </div>

                    <div className = "retweets" onClick={this.handleClickRT}>
                        <ShareOutline />
                        <span>{this.props.reactions.retweets}</span>
                    </div>

                    <div className = "likes" likes onClick={this.handleClickLike}>
                        <HeartOutline />
                        <span>{this.props.reactions.likes}</span>
                    </div>

                </div>

            </div>
        )
    }
}

export default Tweet;