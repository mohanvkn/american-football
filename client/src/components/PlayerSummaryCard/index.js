import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';

import { ROUTES } from '../../_constants';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

class PlayerSummaryCard extends Component {
    handleCardClick = event => {
        event.preventDefault();
        this.props.history.push({
            pathname: ROUTES.PLAYER,
            state: { playerDetails: this.props.playerDetails },
        });
    };

    render() {
        const { classes, playerDetails } = this.props;
        return (
            <Grid item key={playerDetails.person.displayName} xs={12} sm={6} md={4}>
                <Card>
                    <CardHeader
                        title={playerDetails.person.displayName + ' (' + playerDetails.positionAbbr + ')'}
                        titleTypographyProps={{ align: 'center' }}
                        subheaderTypographyProps={{ align: 'center' }}
                        className={classes.cardHeader}
                    />

                    <CardActions className={classes.cardActions}>
                        <Button fullWidth variant="contained" color="primary" onClick={this.handleCardClick}>
                            View More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}

PlayerSummaryCard.propTypes = {
    classes: PropTypes.object.isRequired,
    playerDetails: PropTypes.object,
    // history: PropTypes.array,
};

export default compose(
    withRouter,
    withStyles(styles)
)(PlayerSummaryCard);
