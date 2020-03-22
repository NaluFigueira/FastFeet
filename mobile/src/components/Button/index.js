import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Button({
  children,
  loading,
  backgroundColor,
  ...rest
}) {
  return (
    <Container {...rest} backgroundColor={backgroundColor}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
  backgroundColor: '#7D40E7',
};
