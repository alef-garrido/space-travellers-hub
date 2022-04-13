/* eslint-disable camelcase */
import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { rocketReserved, rocketReservedCanceled } from '../Redux/slices/rockets-dux';

function Rocket(props) {
  const dispatch = useDispatch();
  const { rocket } = props;
  const reserveHandler = (e) => {
    const element = e.target.parentNode;
    const { id } = element.parentNode;
    dispatch(rocketReserved(id));
  };

  const cancellationHandler = (e) => {
    const element = e.target.parentNode;
    const { id } = element.parentNode;
    dispatch(rocketReservedCanceled(id));
  };
  return (
    <li
      key={rocket.id}
      id={rocket.id}
      className="list--item"
    >
      <div className="item--img-container">
        <img
          className="item--img"
          alt=""
          src={rocket.flickr_images[0]}
        />
      </div>
      <div className="item--info-container">
        <p className="info--title">
          {rocket.rocket_name}
        </p>
        <p className="info--description">
          {rocket.reserved ? <span>Reserved</span> : null}
          {rocket.description}
        </p>
        {
          rocket.reserved
            ? (
              <button
                className="info--btn-cancel"
                type="button"
                onClick={cancellationHandler}
              >
                Cancel Reservation
              </button>
            )
            : (
              <button
                className="info--btn-reserve"
                type="button"
                onClick={reserveHandler}
              >
                Reserve Rocket
              </button>
            )
        }
      </div>
    </li>
  );
}

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    rocket_name: PropTypes.string,
    flickr_images: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
