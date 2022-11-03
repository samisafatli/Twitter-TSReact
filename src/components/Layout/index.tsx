import React from 'react';
import { Container, Wrapper } from './styles';
import Feed from '../pages/Feed';
import MenuBar from '../MenuBar';

const Layout: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <MenuBar></MenuBar>
                <Feed/>
            </Wrapper>
        </Container>
    )
}

export default Layout;