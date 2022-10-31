import React from 'react';
import { Container } from './styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const PostCreator = () => {
  return (
    <Container>
      <Box
        sx={{
          width: 600,
          height: 150,
        }}
      >
        <TextField fullWidth
          multiline
          rows={6}
          maxRows={6}
          id="standard-basic"
          label="What about another Posterr?!"
          variant="standard"
         />
      </Box>
    </Container>
  );
}

export default PostCreator;