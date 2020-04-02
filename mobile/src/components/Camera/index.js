import React, { useRef, useState } from 'react';
import { Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import { TCamera, CameraButton, LoadingSpinner } from './styles';

export default function Camera({ loadPreview }) {
  const camera = useRef(null);
  const [loading, setLoading] = useState(false);

  async function handleChange(image) {
    const data = new FormData();

    const { uri } = image;

    const fileName = uri.split('/Camera/')[1];
    const name = fileName.split('.')[0];
    const extension = fileName.split('.')[1];

    data.append('file', {
      uri: image.uri,
      type: `image/${extension}`,
      name,
    });

    try {
      const response = await api.post('files', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const { id, url } = response.data;

      setLoading(false);
      loadPreview(id, url);
    } catch (error) {
      Alert.alert(
        'Erro ao carregar imagem',
        'Não foi possível carrgar a imagem'
      );
    }
  }

  async function takePicture() {
    if (camera) {
      setLoading(true);
      const options = { quality: 0.5, base64: true };
      const data = await camera.current.takePictureAsync(options);
      handleChange(data);
    }
  }

  return (
    <>
      <TCamera
        ref={camera}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        port
        androidCameraPermissionOptions={{
          title: 'Permissão para usar a câmera',
          message: 'Nós precisamos da sua permissão para usar a câmera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancelar',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <CameraButton onPress={takePicture}>
          <Icon name="photo-camera" size={36} style={{ color: 'white' }} />
        </CameraButton>
      )}
    </>
  );
}

Camera.propTypes = {
  loadPreview: PropTypes.func.isRequired,
};
