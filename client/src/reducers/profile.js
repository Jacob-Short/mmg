import {
    GET_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILE,
    // UPDATE_PROFILE,
    // GET_PROFILES,
    // GET_REPOS,
    // NO_REPOS
  } from '../actions/types';
  
  
  const initialState = {
    profile: null,
    // profiles: []
    // reops: []
    loading: true,
    error: {}
}

export default function profile(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            }
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                loading: false
            }
        default:
            return state
    }
}