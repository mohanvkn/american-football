/**
 * Created by Mohan Vamsi on 3/7/2019.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    cardHeader: {
        backgroundColor: theme.palette.grey[200],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing.unit * 2,
    },
    cardActions: {
        [theme.breakpoints.up('sm')]: {
            paddingBottom: theme.spacing.unit * 2,
        },
    },
    footer: {
        marginTop: theme.spacing.unit * 8,
        borderTop: `1px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
});

class Player extends Component {
    render() {
        const { classes } = this.props;
        const { playerDetails } = this.props.location.state;

        return (
            <React.Fragment>
                <main className={classes.layout}>
                    <div className={classes.heroContent}>
                        <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                            Player Details
                        </Typography>
                    </div>

                    <List className={classes.root}>
                        <ListItem>
                            <ListItemText secondary="Name" primary={playerDetails.person.displayName} />
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="Unit" primary={playerDetails.unit} />
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="Position" primary={playerDetails.position} />
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="Depth Order" primary={playerDetails.depthOrder} />
                        </ListItem>
                    </List>
                </main>
            </React.Fragment>
        );
    }
}

Player.propTypes = {
    location: PropTypes.object.isRequired,
};

export default compose(
    withRouter,
    withStyles(styles)
)(Player);
