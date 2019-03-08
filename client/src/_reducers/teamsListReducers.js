/**
 * Created by 300126 on 3/7/2019.
 */

import { teamsListConstants } from '../_constants';

const initialState = {
    teamsList: [],
    fetchingTeamsList: false,
};

export function teamsListReducer(state = initialState, action) {
    switch (action.type) {
        case teamsListConstants.GET_TEAMS_LIST_REQUEST:
            return {
                ...state,
                fetchingTeamsList: true,
            };
        case teamsListConstants.GET_TEAMS_LIST_SUCCESS:
            return {
                teamsList: action.teamsList,
                fetchingFileList: false,
            };
        case teamsListConstants.GET_TEAMS_LIST_FAILURE:
            return {
                ...state,
                fetchingFileList: false,
            };

        default:
            return state;
    }
}
