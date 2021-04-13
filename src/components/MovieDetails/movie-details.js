import React from 'react';
import classes from './movie-details.css';
import ReactDOM from 'react-dom';
import Image from '../Item/Image/image';
import Title from '../Title';
import DateComponent from '../Item/Date';
import Container from '../Container';
import Rating from '../Rating';
import Logo from '../Logo';

function MovieDetails ( {
                            visible,
                            hideVisible,
                            title,
                            image,
                            id,
                            date,
                            additionInfo = 'lorem lorem impusum',
                            duration,
                            rate,
                            description,
                            children,
                            state,
                            setStateApp
}) {
    return (
        <>
            {
                visible ?
                    ReactDOM.createPortal(
                        <div className={classes.root}>
                            <Container type='sp' wrap={false}>
                                <div className={classes.root__logo}>
                                    <Logo link='#' onClick={hideVisible} nameSite='netflixRoulette' description='Better portal'/>
                                </div>
                                <div className={classes.root__image} onClick={hideVisible}>
                                    <Image height={280} width={200} image={image} />
                                </div>
                                <div className={classes.root__content}>
                                    <div className={classes['root__top-line']}>
                                        <Title classesCss={[classes['root__title']]} title={title} type='h1' />
                                        <div className={classes.root__rating}>
                                            <Rating rate={rate} />
                                        </div>
                                    </div>
                                    <div className={classes['root__addition-info']}>
                                        {additionInfo}
                                    </div>
                                    <div className={classes['root__bottom-line']}>
                                        <DateComponent date={date}/>
                                        <span>{duration}</span>
                                    </div>
                                    <p className={classes['root__description']}>{description}</p>
                                </div>
                                <a href='#' onClick={hideVisible} className={classes['root__search']}>
                                    <svg version="1.1" id="Capa_1"  x="0px" y="0px"
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
                                </a>
                            </Container>
                        </div>,
                        document.body):<></>

            }
        </>
    )
}

export default MovieDetails;