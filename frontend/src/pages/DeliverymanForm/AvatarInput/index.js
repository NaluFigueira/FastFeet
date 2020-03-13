import React, { useState, useEffect, useRef } from 'react';
import { MdImage } from 'react-icons/md';
import { useField } from '@rocketseat/unform';
import colors from '~/styles/colors';

import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        {!preview && !(defaultValue && defaultValue.url) ? (
          <div>
            <MdImage size={64} color={colors.border} />
            <span>Adicionar foto</span>
          </div>
        ) : (
          <img src={preview || (defaultValue && defaultValue.url)} alt="" />
        )}
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
