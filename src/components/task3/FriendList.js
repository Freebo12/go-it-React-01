import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { ListFriends } from './FriendListItem.styled';

export const FriendList = ({ items }) => {
  return (
    <ListFriends>
      {items.map(item => (
        <li key={item.id}>
          <FriendListItem item={item} />
        </li>
      ))}
    </ListFriends>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
