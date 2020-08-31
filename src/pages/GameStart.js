import React from 'react';
import { Paper, Container } from '@material-ui/core';
import Renderer from '../components/Renderer';

export default (props) => {

    return (
        <Container
            style={{
                height: '100%',
                padding: '3em',
            }}
        >
            <Paper
                style={{
                    height: '100%'
                }}
            >
                <Renderer/>
            </Paper>
        </Container>
    )
}