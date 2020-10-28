import cuid from 'cuid';

let restaurant, review;

export default function manageRestaurants(state={restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      restaurant = {...action.restaurant, id: cuid()}
      return {...state, restaurants: state.restaurants.concat(restaurant)}

      case 'DELETE_RESTAURANT':
        return {...state, restaurants: state.restaurants.filter(r=>r.id !== action.restaurant.id)}

      case 'ADD_REVIEW':
        review = {...action.review, id: cuid()}
        return  {...state, reviews: state.reviews.concat(review)}

      case 'DELETE_REVIEW':
        debugger
        return {...state, reviews: state.reviews.filter(r=>r.id !== action.review.id)}

    default:
    return state
  }
}
