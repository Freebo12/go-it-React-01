import PropTypes from 'prop-types';
import { TittleElemTd, TittleElemType } from './Transaction.styled';

export const TrItem = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <TittleElemType>{type}</TittleElemType>
      <TittleElemTd>{amount}</TittleElemTd>
      <TittleElemTd>{currency}</TittleElemTd>
    </>
  );
};

TrItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
