import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

export const TCamera = styled(RNCamera)`
  flex: 1;
`;

export const CameraButton = styled.TouchableOpacity`
  border-radius: 180px;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 70%;
  align-self: center;
  padding: 10px;
`;

export const LoadingSpinner = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#7d40e7',
})`
  position: absolute;
  top: 70%;
  align-self: center;
  padding: 10px;
`;
