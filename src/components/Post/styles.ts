import styled from "styled-components";

export const Container = styled.div`
    margin-top: 20px;
    max-width: 600px;
`

export const Reactions = styled.div`
    display: flex;
    justify-content: flex-end;
    
`

export const Reaction = styled.div`
    margin-left: 20px;
    cursor: pointer;
    border-radius:100px;
    :hover {
        box-shadow: 0 0 11px rgba(0, 0, 0, 0.2); 
    }
`