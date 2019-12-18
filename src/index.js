import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDeatal';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div class="ui comments">
            <h3 class="ui dividing header">Comments</h3>
            <ApprovalCard>
                <CommentDetail
                    imgage={faker.image.avatar()} 
                    author = "Suliya" 
                    timeAgo = "Today at 12:48 PM" 
                    text="Really nice one!"/>
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    imgage={faker.image.avatar()} 
                    author = "Laka" 
                    timeAgo = "Today at 16:25 PM" 
                    text="got it"/>
            </ApprovalCard>    
            
            <ApprovalCard>
                <CommentDetail 
                    imgage={faker.image.avatar()}
                    author = "Issa" 
                    timeAgo = "Yesterday at 12:48 PM" 
                    text="love to reat it"/>
            </ApprovalCard>

            <ApprovalCard>    
                <CommentDetail 
                    imgage={faker.image.avatar()}
                    author = "Dasuni" 
                    timeAgo = "Today at 22:48 PM" 
                    text="very important article"/>
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    imgage={faker.image.avatar()}
                    author = "Dharshana" 
                    timeAgo = "Sunday at 12:48 PM" 
                    text="There are some technical issues in this article"/>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);