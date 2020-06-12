import React, { useState } from 'react';
import { TextWidget } from '@plone/volto/components';

const View = (props) => {
  const [input, setInput] = useState('');
  const onChange = (id, value) => {
    setInput(value);
    props.onChange(props.data.input, value);
  };
  return (
    <TextWidget
      id="input-form-view"
      title={
        props.data.input?.length > 0 ? props.data.input : 'enter input label'
      }
      required={props.data.required}
      value={input}
      onChange={onChange}
    />
  );
};

export default View;
