import React, { useState } from 'react';
import { Container, Title } from './styles';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';
import { UserFollow } from '@styled-icons/remix-fill/UserFollow'
import {Feed} from '@styled-icons/material-rounded/Feed'
import { admUser } from '../../../../mockedData';

const Profile = () => {

const { username, joinDate, followers, following } = admUser

  return (
    <Container>
        <Title>Profile Page</Title>
        <Link to='/feed' style={{ textDecoration: "none", color: "black"}}>
          <Typography sx={{fontSize: 14 }} color="text.secondary" gutterBottom>Back to Feed</Typography>
          <Feed size={20} style={{marginLeft: "30px"}}/>
        </Link>

      <Card sx={{ marginTop: "30px", wordWrap: "break-word", minWidth: 275, display: "flex", justifyContent: "center", textAlignLast: "center" }}>
                <CardContent>
                    <Typography sx={{fontSize: 14 }} color="text.secondary" gutterBottom>{username}</Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">{joinDate}</Typography>
                    <UserFollow size={20}/> 
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">Followers: {followers.length}</Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">Following: {following.length}</Typography>
                </CardContent>
            </Card>
    </Container>
  );
}

export default Profile;