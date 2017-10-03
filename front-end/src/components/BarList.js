import React from 'react'
import PropTypes from 'prop-types'
import Bar from './Bar'
import { Card } from 'semantic-ui-react';
const propTypes = {
  bars: PropTypes.array
}

const defaultProps = {
  bars: []
}

const BarList = ({ bars }) => {
  return (
    <Card.Group className="bar-list">

      {bars.map(bar => {
        return (<Bar id={bar.id} key={bar.id} name={bar.name} image_url={bar.image_url}
          url={bar.url} rating={bar.rating} price={bar.price} display_phone={bar.display_phone}
          categories={getBarCategories(bar)} address={getAddress(bar)} coordinates={bar.coordinates} />)
      })
      }
    </Card.Group>
  )
}

const getBarCategories = (bar) => {
  const reduced = bar.categories.reduce((accum, category) => {
    if (category.title !== "Bars") accum.push(category.title);
    return accum;
  }, [])
  return reduced.length > 0
    ? reduced.join(', ')
    : '';
}
const getAddress = (bar) => {
  return `${bar.location.address1}, ${bar.location.city}`;
}

BarList.propTypes = propTypes

BarList.defaultProps = defaultProps

export default BarList
