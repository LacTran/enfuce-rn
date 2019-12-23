import React from 'react';
import styled from 'styled-components';
import config from '../../assets/config';



const Wrapper = styled.View`
    flex:1;
    margin-top: 100px;
`

export default function Layout({ children }) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}