/**
 * Created by Mohan Vamsi on 3/7/2019.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { teamsListActions } from '../../_actions';
import TeamSummaryCard from '../TeamSummaryCard';

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    appBar: {
        position: 'relative',
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

class Teams extends Component {
    componentDidMount() {
        this.props.getTeamsList();
    }

    render() {
        const { classes, teamsList } = this.props;
        return (
            <React.Fragment>
                <main className={classes.layout}>
                    {/* Hero unit */}
                    <div className={classes.heroContent}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Teams
                        </Typography>
                    </div>

                    <Grid container spacing={40} alignItems="flex-end">
                        {teamsList.map(team => (
                            <TeamSummaryCard key={team.id} team={team} />
                        ))}
                    </Grid>
                </main>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    const { teamsList } = state.teamsListReducer;
    return {
        teamsList,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getTeamsList: () => dispatch(teamsListActions.getTeamsList()),
    };
};

Teams.propTypes = {
    dispatch: PropTypes.func,
    teamsList: PropTypes.array,
    getTeamsList: PropTypes.func,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Teams));
