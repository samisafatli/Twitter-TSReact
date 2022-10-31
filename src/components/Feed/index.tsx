import React from 'react';
import Post from '../Post';
import PostCreator from '../PostCreator';
import {feed} from '../../../mockedData'
  
const Feed: React.FC = () => {
    return (
        <div>
            <PostCreator/>
            {feed.map(post => (
                <Post 
                    username={post.username}
                    content={post.content}
                    reactions={post.reactions}
                />
            ))}
        </div>
        
    )
}

export default Feed;