/**
 * Created by Mohan Vamsi on 3/7/2019.
 */

export const fetchService = {
    getTeamsList,
};

function getTeamsList() {
    const requestOptions = {
        method: 'GET',
    };

    return fetch('/api/teamsList', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
