import React, {useState} from 'react';
import classes from './item.css';
import Image from './Image/image';
import Title from './Title';
import DateComponent from './Date';
import Genre from './Genre/genre';
import PropTypes from 'prop-types';
import ToggleMenu from "../ToggleMenu";

function Item (props) {
    if (!props) {
        return false;
    }

    const {image, date, title, genres} = props;
    const [visibleMenu, setVisibleMenu] = useState(false);

    return (
        <div className={classes.root}
             onMouseEnter={() => setVisibleMenu(true)}
             onMouseLeave={() => setVisibleMenu(false)}
        >
            <ToggleMenu isVisibleMenu={visibleMenu}/>
            <Image image={image} />
            <div className={classes.root__info}>
                <Title title={title} />
                <DateComponent date={date} />
                <Genre categories={genres} />
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
