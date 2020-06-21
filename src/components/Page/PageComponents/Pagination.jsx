import React from 'react';
import { Link } from 'react-router-dom';
import PaginationItem from '@material-ui/lab/PaginationItem';
import PropTypes from 'prop-types';

const Pagination = (props) => {
  const { page } = props;

  return (
    <Pagination
      page={page || 1}
      count={10}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/${item.page}`}
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...item}
        />
      )}
    />
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
};

export default Pagination;
