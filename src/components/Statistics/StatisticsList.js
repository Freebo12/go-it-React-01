import PropTypes from 'prop-types';
import { Statistics } from './Statistics';

import {
  SectionStatistics,
  Title,
  ListStats,
  ListElem,
} from './Statistics.styled';

export const StatisticsList = ({ title, items }) => {
  return (
    <SectionStatistics>
      {title !== '' ? <Title>{title}</Title> : <></>}

      <ListStats>
        {items.map(item => (
          <ListElem key={item.id}>
            <Statistics item={item} tittle={title} />
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
