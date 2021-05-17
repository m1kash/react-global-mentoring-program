import React, {useEffect} from 'react';
import classes from './movie-details.css';
import ReactDOM from 'react-dom';
import Image from '../Item/Image/image';
import Title from '../Title';
import DateComponent from '../Item/Date';
import Container from '../Container';
import Rating from '../Rating';
import Logo from '../Logo';
import {connect, useDispatch} from 'react-redux';
import {loadMovieDetailsRequest} from '../../actions/api';
import {loadMovieDetails} from '../../actions/movie';
import {useParams} from 'react-router';
import {Link} from 'react-router-dom';

function MovieDetails ( {
    movie
}) {
    const dispatch = useDispatch();
    const { movieId } = useParams();
    const setDetails = (result) => {
        dispatch(loadMovieDetails(result));
        window.scrollTo(0, 0);
    }
    useEffect(function (  ) {
        loadMovieDetailsRequest(`movies/${movieId}`, {}, setDetails);
    }, [movieId]);

    return (
        <>
            {ReactDOM.createPortal(<div className={classes.root}>
                <Container type='sp' wrap={false}>
                    <div className={classes.root__logo}>
                        <Logo nameSite='netflixRoulette'
                              description='Better portal'/>
                    </div>
                    <div className={classes.root__image}>
                        <Image height={280} width={200} image={movie.poster_path}/>
                    </div>
                    <div className={classes.root__content}>
                        <div className={classes['root__top-line']}>
                            <Title classesCss={[classes['root__title']]} title={movie.title} type='h1'/>
                            <div className={classes.root__rating}>
                                <Rating rate={movie.vote_average}/>
                            </div>
                        </div>
                        <div className={classes['root__addition-info']}>
                            {movie.tagline}
                        </div>
                        <div className={classes['root__bottom-line']}>
                            <DateComponent date={movie.release_date}/>
                            <span className={classes.root__duration}>{movie.runtime} min</span>
                        </div>
                        <p className={classes['root__description']}>{movie.overview}</p>
                    </div>
                    <Link to='/' className={classes['root__search']}>
                        <svg version="1.1" id="Capa_1" x="0px" y="0px"
                             viewBox="0 0 512.005 512.005">
                            <g>
                                <g>
                                    <path d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
                                                    S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
                                                    c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
                                                     M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"/>
                                </g>
                            </g>
                        </svg>
                    </Link>
                </Container>
                </div>, document.body)}
        </>
    )
}

function mapStateToProps(store) {
    const {movieDetails} = store;
    return {
        movie: movieDetails
    }
}

export default connect(mapStateToProps)(MovieDetails);