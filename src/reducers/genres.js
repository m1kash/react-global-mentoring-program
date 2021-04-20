const initialState = [
    "Drama",
    "Romance",
    "Fantasy",
    "Adventure",
    "Science Fiction",
    "Action",
    "Comedy",
    "Family",
    "Animation",
    "Mystery",
    "Thriller",
    "Music",
    "War",
    "Crime"
];
export default function genres (state = initialState, {type, payload}) {
    if (typeof state === 'undefined') {
        return initialState
    }

    return state;
}