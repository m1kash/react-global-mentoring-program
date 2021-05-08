const DEFAULT_PROPS_FORM = {
    'title': {
        id: 'title',
        name: 'Title',
        placeholder: 'Title'
    },
    'tagline': {
        id: 'tagline',
        name: 'Tagline',
        placeholder: 'Tagline'
    },
    'release_date': {
        id: 'release_date',
        name: 'Release date',
        placeholder: 'Select date',
        type: 'date'
    },
    'poster_path': {
        id: 'poster_path',
        name: 'Movie url',
        placeholder: 'Movie URL here'
    },
    'genres': {
        id: 'genres',
        name: 'Genre',
        placeholder: 'Select Genre',
        type: 'multiselect'
    },
    'overview': {
        id: 'overview',
        name: 'Overview',
        placeholder: 'Overview here'
    },
    'runtime': {
        id: 'runtime',
        name: 'Runtime',
        placeholder: 'Runtime here',
        type: 'number'
    }
};

export default DEFAULT_PROPS_FORM;