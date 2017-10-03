import React from 'react'
import PropTypes from 'prop-types'
import { Card, Image, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {
  CARD_MOUSE_ENTER,
  CARD_MOUSE_EXIT
} from '../constants/actionTypes.js';

const propTypes = {
  categories: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  imgage_url: PropTypes.string,
  url: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.string,
  display_phone: PropTypes.string
}

const defaultProps = {}

const Bar = ({ id, name, image_url, url, rating, price, display_phone, categories, address, coordinates, cardMouseEnter, cardMouseExit }) => (
  <Card fluid href={url} target="_blank" onMouseOver={() => cardMouseEnter(coordinates)} onMouseOut={cardMouseExit}>
    <Image src={image_url} className="bar-image" />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{categories}</Card.Meta>
      <Card.Description>
        {generateIcons(rating, "star", "star half", "yellow")}
        <br />
        {generateIcons(price, "dollar", false, "green")}
        <br />
        <Icon name="phone" />{display_phone}
        <br />
        <Icon name="marker" />{address}
      </Card.Description>
    </Card.Content>
  </Card>
  // <li>
  //   <p>{name}</p>
  //   <img className="bar-image" src={image_url} alt="alt_image_text"/>
  //   <p>{price}</p>
  //   <p>{`${categories}`}</p>
  // </li>
)
const generateIcons = (rating, fullIcon, halfIcon = false, color = "black") => {
  let count = 0;
  if (!isNaN(parseFloat(rating))) count = Math.floor(rating);
  else if (typeof rating === "string") count = rating.split('').length;
  else return;
  const iconArr = Array.from({ length: count }, (_, i) => <Icon name={fullIcon} color={color} key={fullIcon + i} />);
  if (halfIcon && !Number.isInteger(rating)) {
    iconArr.push(<Icon name={halfIcon} color={color} key={fullIcon + "half"} />);
  }
  return iconArr;
}

Bar.propTypes = propTypes

Bar.defaultProps = defaultProps

const mapDispatchToProps = dispatch => ({
  cardMouseEnter: (coordinates) => {
    dispatch({ type: CARD_MOUSE_ENTER, payload: coordinates })
  },
  cardMouseExit: () => {
    dispatch({ type: CARD_MOUSE_EXIT })
  }
})

export default connect(() => { return {} }, mapDispatchToProps)(Bar)
