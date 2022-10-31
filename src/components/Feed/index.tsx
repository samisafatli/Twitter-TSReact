import React from 'react';
import Post from '../Post';

import {feed} from '../../../mockedData'
  
const Feed: React.FC = () => {
    return (
        <div>
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