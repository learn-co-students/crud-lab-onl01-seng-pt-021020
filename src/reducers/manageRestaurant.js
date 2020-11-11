import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: []
}, action) {
    switch(action.type){
        case 'ADD_RESTAURANT':
            let restaurant = {
                id: cuid(),
                text: action.restaurant
            }
            return { restaurants: [...state.restaurants, restaurant] }

        case 'DELETE_RESTAURANT':
            return { restaurants: state.restaurants.filter(res => res.id !== action.id)}

        default:
            return state;
    }
}
