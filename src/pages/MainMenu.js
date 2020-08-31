import React from 'react';
import {
    Container,
    Paper,
    Typography,
    Button
} from '@material-ui/core'
import InternalSubscriptions from '../services/internalSubscriptions/InternalSubscriptions';

const handleNewGameClick = () => {
    InternalSubscriptions.publish('change-page', 'game-start');
};

export default () => {
    return (
        <Container
            style={{
                padding: '3em',
                height: '100%'
            }}
        >
            <Paper
                style={{
                    height: '100%',
                    backgroundColor: 'grey',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography
                    style={{
                        textAlign: 'center',
                    }}
                    variant='h1'
                >
                    Knaveish
                </Typography>
                <Button onClick={handleNewGameClick}>
                    New Game
                </Button>
                <Button>
                    Load Game
                </Button>
            </Paper>
        </Container>
    )
}