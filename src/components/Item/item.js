import React, {useState} from 'react';
import classes from './item.css';
import Image from './Image/image';
import Title from './Title';
import DateComponent from './Date';
import Genre from './Genre/genre';
import PropTypes from 'prop-types';
import ToggleMenu from "../ToggleMenu";
import Delete from './Delete';
import Edit from './Edit';

function Item ({image, date, title, genres, overview, genresAll}) {
    const [visibleMenu, setVisibleMenu] = useState(false);

    return (
        <div className={classes.root}>
            <ToggleMenu className={classes.root__toggle}>
                <Edit image={image} date={date} titleItem={title} genres={genres} overview={overview} genresBase={genresAll} />
                <Delete title={title} />
            </ToggleMenu>
            <Image image={image} />
            <div className={classes.root__info}>
                <Title title={title} />
                <DateComponent date={date} />
                <Genre categories={genres} genresBase={genresAll} />
            </div>
        </div>
    )
}

Item.propTypes = {
    image: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.array
}

Item.defaultProps = {
  genres: []
};

export default Item;
