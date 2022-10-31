import React from 'react';
import { Container } from './styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Heart} from '@styled-icons/foundation/Heart';
import { HeartDislike } from '@styled-icons/ionicons-solid/HeartDislike';

type PostProps = {
    username: string,
    content: string,
    reactions: {
        likes: number,
        dislikes: number,
    }
}

const Post = ({username, content, reactions}: PostProps) => {
    return (
        <Container>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {username}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {content}
                    </Typography>
                    <Typography variant="body2">
                    <Heart size={20}/> {reactions.likes}
                    </Typography>
                    <Typography variant="body2">
                    <HeartDislike size={20}/>{reactions.dislikes}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Post;