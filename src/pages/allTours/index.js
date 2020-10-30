import React, { useState, useParams, useEffect } from 'react';
import { connect } from 'react-redux';
import { getTours } from '../../actions/allToursActions'

const AllTours = (props) => {
  const [allTours, setAllTours] = useState([]);

  console.log('props.tours', props.tours)
  // console.log('tours', tours)
  useEffect(() => {
    getTours()
  }, [])

  // console.log('')

  return (
    <h1>All Tours</h1>
  )
}

const mapStateToProps = state => ({
  tours: state.allTours
})

export default connect(mapStateToProps, { getTours })(AllTours)