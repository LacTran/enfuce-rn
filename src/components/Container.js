import React from 'react';
import styled from 'styled-components';
import config from '../../assets/config';



const Container = styled.View`
    flex:1;
    margin-top: 100px;
`

export default function Container({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}