import PropTypes from 'prop-types';
import {
  UserStatusOnline,
  UserStatusOffLine,
  UserBox,
  NameFriend,
} from './FriendListItem.styled';

export const FriendListItem = ({ item: { avatar, name, isOnline } }) => {
  return (
    <UserBox>
      {isOnline != true ? <UserStatusOffLine /> : <UserStatusOnline />}
      <img src={avatar} alt="User avatar" width="48" />
      <NameFriend>{name}</NameFriend>
    </UserBox>
  );
};

FriendListItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
