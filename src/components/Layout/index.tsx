import React from 'react';
import { Container, Wrapper } from './styles';
import Feed from '../Feed';

const Layout: React.FC = () => {
    return (
        <Container>
            <Wrapper>
            {/*<MenuBar></MenuBar> */}
                <Feed/>
            </Wrapper>
        </Container>
    )
}

export default Layout;