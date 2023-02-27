import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  box-shadow: 0 8px 30px rgb(212 20 67 / 10%);
  width: 350px;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const UserInfo = styled.div`
  box-shadow: 0 8px 30px rgb(212 20 67 / 10%);
  border-radius: 4px;
  background-color: rgb(237, 237, 237);
  padding: 40px;
`;

export const AvatarUser = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  border: solid white;
  padding: 3px;
`;

export const NameUser = styled.p`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
`;

export const TagUser = styled.p`
  text-align: center;
  font-size: 17px;
  color: grey;
`;

export const ListProfile = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-around;
  padding-left: 0px;
  margin: 0px;
`;

export const BoxSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-right: 1px solid grey;

  font-size: 17px;
  text-align: center;
`;

export const BoxLast = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-right: none;
`;

export const SocialNumbers = styled.p`
  font-weight: 900;
  margin: 0px;
`;

export const SocialTittle = styled.p`
  color: grey;
  margin: 2px;
`;
