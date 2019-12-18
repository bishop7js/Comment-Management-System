import React from 'react';
//import ReactDOM from 'react-dom';
import faker from 'faker';

const CommentDetail = (props) => {
    console.log(props);
    return(
        <div className="comment">
            <div className="avatar"><img src={props.imgage}/></div>
            <div className="content">
                <a className="author">{props.author}</a>
            <div className="metadata">
                <div>{props.timeAgo}</div>
        </div>
                <div className="text">{props.text}</div>
                <div className="actions"><a className="">Reply</a></div>
            </div>
        </div>
    );
}

export default CommentDetail;