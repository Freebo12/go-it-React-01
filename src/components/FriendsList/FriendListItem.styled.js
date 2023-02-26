import styled from '@emotion/styled';

export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 17px;
  font-size: 17px;
  border-radius: 4px;
  box-shadow: 0 8px 30px rgb(212 20 67 / 10%);
  gap: 20px;
`;

export const UserStatusOnline = styled.span`
  margin-top: auto;
  margin-bottom: auto;
  width: 20px;
  height: 20px;
  background-image: radial-gradient(#4a8728 0%, green 70%, #f4efef00 20%);
`;

export const UserStatusOffLine = styled.span`
  margin-top: auto;
  margin-bottom: auto;
  width: 20px;
  height: 20px;
  background-image: radial-gradient(#fd0202 0%, #fd0202 70%, #f4efef00 20%);
`;

export const ListFriends = styled.ul`
  list-style: none;
  padding-left: 0px;
  margin: 0px;
  width: 350px;
`;

export const NameFriend = styled.ul`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
`;
