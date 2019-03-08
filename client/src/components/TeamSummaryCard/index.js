import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { ROUTES } from '../../_constants';

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
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

class TeamSummaryCard extends Component {
    handleCardClick = event => {
        event.preventDefault();
        this.props.history.push({
            pathname: ROUTES.TEAM,
            state: { teamDetails: this.props.team },
        });
    };

    render() {
        const { classes, team } = this.props;
        return (
            <Grid item key={team.id} xs={12} sm={6} md={4}>
                <Card>
                    <CardHeader
                        title={team.nickName}
                        titleTypographyProps={{ align: 'center' }}
                        subheaderTypographyProps={{ align: 'center' }}
                        className={classes.cardHeader}
                    />
                    <CardContent>
                        <div className={classes.cardPricing}>
                            <Typography component="h2" variant="h5" color="textPrimary">
                                {team.fullName}
                            </Typography>
                            <Typography variant="h2" color="textSecondary">
                                {team.abbr}
                            </Typography>
                        </div>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Button fullWidth variant="contained" color="primary" onClick={this.handleCardClick}>
                            View Team
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}

TeamSummaryCard.propTypes = {
    classes: PropTypes.object.isRequired,
    team: PropTypes.object,
    // history: PropTypes.array,
};

export default compose(
    withRouter,
    withStyles(styles)
)(TeamSummaryCard);
