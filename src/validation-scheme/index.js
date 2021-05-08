import * as Yup from 'yup';

export const validationScheme = Yup.object().shape({
    'title': Yup.string().required('Required'),
    'tagline': Yup.string(),
    'release_date': Yup.string(),
    'poster_path': Yup.string().url().required('Required'),
    'genres': Yup.array().of(Yup.string()).min(1, 'Choice one or more genre').required('Required'),
    'overview': Yup.string().required('Required'),
    'runtime': Yup.number().required('Required')
});