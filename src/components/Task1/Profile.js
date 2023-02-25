import PropTypes from 'prop-types';
import {
  ProfileBox,
  UserInfo,
  AvatarUser,
  NameUser,
  TagUser,
  ListProfile,
  BoxSocial,
  BoxLast,
  SocialNumbers,
  SocialTittle,
} from './Profile.styled';

export const Profile = ({
  items: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  //create_markup
  return (
    <ProfileBox>
      <UserInfo>
        <AvatarUser src={avatar} alt={username} />
        <NameUser>{username}</NameUser>
        <TagUser>@{tag}</TagUser>
        <TagUser>{location}</TagUser>
      </UserInfo>

      <ListProfile>
        <li>
          <BoxSocial>
            <SocialTittle>Followers</SocialTittle>
            <SocialNumbers>{followers}</SocialNumbers>
          </BoxSocial>
        </li>
        <li>
          <BoxSocial>
            <SocialTittle>Views</SocialTittle>
            <SocialNumbers>{views}</SocialNumbers>
          </BoxSocial>
        </li>
        <li>
          <BoxLast>
            <SocialTittle>Likes</SocialTittle>
            <SocialNumbers>{likes}</SocialNumbers>
          </BoxLast>
        </li>
      </ListProfile>
    </ProfileBox>
  );
};

Profile.propTypes = {
  items: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
