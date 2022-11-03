import React, { useState } from 'react';
import { Container, BoxDiv, FeedDiv, Toggle} from './styles';
import Post from '../Post';
import {TextField, Switch, Typography} from '@mui/material';
import {Send} from '@styled-icons/fluentui-system-regular/Send'
import {admUser} from '../../../mockedData'
import { useDispatch, useSelector } from 'react-redux';
import { addPosts, usePosts } from '../../redux/slicePosts';

const Feed = () => {

  const feed = useSelector(usePosts)
  const [content, setContent] = useState<string>("");
  
  const newPost = {
    id: Math.floor(Math.random() * 100),
    username: admUser.username,
    content: content,
    reactions: {
      likes: 0,
      dislikes: 0,
    }
  }

  const dispatch = useDispatch()

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
        <Send onClick={() =>dispatch(addPosts(newPost))} size={20}/>
      </BoxDiv>
      <FeedDiv>
      {feed.map(newPost => (
        <Post
          id={newPost.id}
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