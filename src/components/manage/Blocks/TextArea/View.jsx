import React, { useState } from 'react';
import { TextareaWidget } from '@plone/volto/components';

const View = (props) => {
  const [textarea, setTextarea] = useState('');
  const onChange = (id, value) => {
    props.onChange(props.data.textarea, value);
    setTextarea(value);
  };
  return (
    <TextareaWidget
      id="external"
      title={props.data.textarea}
      required={props.data.required}
      value={textarea}
      onChange={onChange}
    />
  );
};

export default View;
