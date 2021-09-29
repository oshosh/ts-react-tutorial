import { createReducer } from "typesafe-actions";
import { asyncState } from "../../lib/reducerUtils";
import { GET_USER_PROFILE, GET_USER_PROFILE_ERROR, GET_USER_PROFILE_SUCCESS } from "./actions";
import { GithubAction, GithubState } from "./types";


const initialState: GithubState = {
    userProfile: asyncState.inital()
    // userProfile: {
    //     loading: false,
    //     error: null,
    //     data: null,
    // }
};

const github = createReducer<GithubState, GithubAction>(initialState, {
    [GET_USER_PROFILE]: (state) => ({
        ...state,
        userProfile: asyncState.load(),
        // userProfile: {
        //     loading: true,
        //     error: null,
        //     data: null,
        // }
    }),
    [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
        ...state,
        userProfile: asyncState.success(action.payload)
        // userProfile: {
        //     loading: false,
        //     error: null,
        //     data: action.payload
        // }
    }),
    [GET_USER_PROFILE_ERROR]: (state, action) => ({
        ...state,
        userProfile: asyncState.error(action.payload)
        // userProfile: {
        //     loading: false,
        //     error: action.payload,
        //     data: null,
        // }
    }),
})

export default github;