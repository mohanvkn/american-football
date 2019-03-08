/**
 * Created by Mohan Vamsi on 3/7/2019.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import PlayerSummaryCard from '../PlayerSummaryCard';

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    toolbarTitle: {
        flex: 1,
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

class Team extends Component {
    render() {
        const { classes } = this.props;
        const { teamDetails } = this.props.location.state;

        return (
            <React.Fragment>
                <main className={classes.layout}>
                    <div className={classes.heroContent}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Stars
                        </Typography>
                    </div>

                    <Grid container spacing={40} alignItems="flex-end">
                        {teamDetails.roster.map(player => (
                            <PlayerSummaryCard key={player.person.displayName} playerDetails={player} />
                        ))}
                    </Grid>
                </main>
            </React.Fragment>
        );
    }
}

Team.propTypes = {
    location: PropTypes.object.isRequired,
};

export default compose(
    withRouter,
    withStyles(styles)
)(Team);
