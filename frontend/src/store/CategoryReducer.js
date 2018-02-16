import {RECEIVE_CATEGORIES} from './types'

export const reducer = (state = { categories: [], loading: true}, action) => {
    switch (action.type) {

        case RECEIVE_CATEGORIES:
            return {...state, categories: action.categories.categories};

        default:
            return state;
    }
};
