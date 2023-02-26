import PropTypes from 'prop-types';
import { Box } from './Statistics.styled';

export const Statistics = ({ title, item: { label, percentage } }) => {
  return (
    <Box style={{ backgroundColor: getRandomColor() }}>
      <span>{label}</span>
      <span>{percentage}%</span>
    </Box>
  );
};

Statistics.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
