import PropTypes from 'prop-types';
import { TrItem } from './TransactionsItem';
import {
  TableTransactions,
  TittleTable,
  ItemTrTable,
} from './Transaction.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableTransactions>
      <thead>
        <tr>
          <TittleTable>Type</TittleTable>
          <TittleTable>Amount</TittleTable>
          <TittleTable>Currency</TittleTable>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <ItemTrTable key={item.id}>
            <TrItem item={item} />
          </ItemTrTable>
        ))}
      </tbody>
    </TableTransactions>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
