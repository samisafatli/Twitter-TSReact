import React, { useState } from 'react';
import { Container, Reactions, Reaction} from './styles';
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

    console.log(reactions)

    const [like, setLike] = useState<number>(reactions.likes);
    const [dislike, setDislike] = useState<number>(reactions.dislikes);
    const [likeActive, setLikeActive] = useState<boolean>(false);
    const [dislikeActive, setDislikeActive] = useState<boolean>(false);

    const addLike = () => {
        if(likeActive){
            setLikeActive(false)
            setLike(like-1)
        } else {
            setLikeActive(true)
            setLike(like+1)
            if(dislikeActive){
                setDislikeActive(false)
                setLike(like+1)
                setDislike(dislike-1)
            }
        }
    }

    const addDislike = () => {
        if(dislikeActive){
            setDislikeActive(false)
            setDislike(dislike-1)
        } else {
            setDislikeActive(true)
            setDislike(dislike+1)
            if(likeActive){
                setLikeActive(false)
                setDislike(dislike+1)
                setLike(like-1)
            }
        }
    }
    
    return (
        <Container>
            <Card sx={{ wordWrap: "break-word", minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{fontSize: 14 }} color="text.secondary" gutterBottom>
                    {username}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {content}
                    </Typography>
                    <Reactions>
                        <Reaction>
                            <Heart className='bla' onClick={addLike} size={20}/> {like}
                        </Reaction>
                        <Reaction>
                        <HeartDislike onClick={addDislike} size={20}/> {dislike}
                        </Reaction>
                    </Reactions>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Post;