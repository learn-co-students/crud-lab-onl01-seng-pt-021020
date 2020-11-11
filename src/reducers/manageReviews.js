import cuid from 'cuid';

export default function manageReviews(state = {
    reviews: []
}, action) {
    switch(action.type){
        case 'ADD_REVIEW':
            const review = {
                text: action.text,
                restaurantId: action.id,
                id: cuid()
            }
            return { reviews: [...state.reviews, review] }

        case 'DELETE_REVIEW':
            return { reviews: state.reviews.filter(rev => rev.id !== action.id) }

        default:
            return state;
    }
}