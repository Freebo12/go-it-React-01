import { Profile } from './Profile';
import PropTypes from 'prop-types';

export const ProfileList = ({ items }) => {
  return (
    <>
      <Profile items={items} />
    </>
  );
};

ProfileList.propTypes = {
  items: PropTypes.object.isRequired,
};
