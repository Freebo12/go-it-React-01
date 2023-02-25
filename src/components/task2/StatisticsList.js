import PropTypes from 'prop-types';
import { Statistics } from '../task2/Statistics';

import {
  SectionStatistics,
  Tittle,
  ListStats,
  ListElem,
} from './Statistics.styled';

export const StatisticsList = ({ tittle, items }) => {
  return (
    <SectionStatistics>
      {tittle !== '' ? <Tittle>{tittle}</Tittle> : <Tittle>Upload More</Tittle>}

      <ListStats>
        {items.map(item => (
          <ListElem key={item.id}>
            <Statistics item={item} tittle={tittle} />
          </ListElem>
        ))}
      </ListStats>
    </SectionStatistics>
  );
};

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
