import React from 'react';
import { Message, Button } from 'semantic-ui-react';

const View = (props) => {
  console.log(props.data.email);
  return (
    <Message>
      <Button onClick={() => props.onSubmit(props.data.email)}>Submit</Button>
    </Message>
  );
};

export default View;
