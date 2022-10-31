import React, { useState } from 'react';
import { Container, BoxDiv} from './styles';
import Post from '../Post';
import TextField from '@mui/material/TextField';
import {Send} from '@styled-icons/fluentui-system-regular/Send'
import {FeedList, IPost, admUser} from '../../../mockedData'

const Feed = () => {

  const [content, setContent] = useState<string>("");
  const [feed, setFeed] = useState<IPost[]>(FeedList);

  const newPost = {
    username: admUser.username,
    content: content,
    reactions: {
      likes: 0,
      dislikes: 0
    }
  }

  const generatePoster =  () => {
    if(content !== "") {
      setFeed([newPost, ...feed])
      setContent("")
    }
  }
 
  return (
    <Container>
      <BoxDiv>
        <TextField
          fullWidth
          multiline
          rows={4}
          maxRows={4}
          inputProps={{value: content, maxLength: 190 }}
          onChange={ event => setContent(event.target.value)}
          id="postgenerator"
          label="What about another Posterr?!"
          variant="standard"
         />
        <Send onClick={generatePoster} size={20}/>
      </BoxDiv>

      {feed.map(newPost => (
        <Post 
          username={newPost.username}
          content={newPost.content}
          reactions={newPost.reactions}
        />
      ))}
    </Container>
  );
}

export default Feed;