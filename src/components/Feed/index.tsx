import React, { useState } from 'react';
import { Container, BoxDiv, FeedDiv, Toggle} from './styles';
import Post from '../Post';
import {TextField, Switch, Typography} from '@mui/material';
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
      dislikes: 0,
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
      <Toggle>
        <Typography>All / Following</Typography>
        <Switch></Switch>
      </Toggle>
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
      <FeedDiv>
      {feed.map(newPost => (
        <Post 
          username={newPost.username}
          content={newPost.content}
          reactions={newPost.reactions}
        />
      ))}
      </FeedDiv>
    </Container>
  );
}

export default Feed;