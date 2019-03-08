/**
 * Created by Mohan Vamsi on 3/7/2019.
 */

import { teamsListConstants } from '../_constants';
import { fetchService } from '../_services';
// import { alertActions } from './';

export const teamsListActions = {
    getTeamsList,
};

function getTeamsList() {
    return dispatch => {
        dispatch(request());

        fetchService.getTeamsList().then(
            data => {
                dispatch(success(data.teams));
            },
            error => {
                dispatch(failure(error.toString()));
                // dispatch(alertActions.error(error.toString()));
            }
        );
    };

    function request() {
        return { type: teamsListConstants.GET_TEAMS_LIST_REQUEST };
    }
    function success(teamsList) {
        return { type: teamsListConstants.GET_TEAMS_LIST_SUCCESS, teamsList };
    }
    function failure(error) {
        return { type: teamsListConstants.GET_TEAMS_LIST_FAILURE, error };
    }
}
