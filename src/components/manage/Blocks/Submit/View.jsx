import React from 'react';
import { Button } from 'semantic-ui-react';

const View = (props) => {
  console.log(props.data.email);
  return (
    <div>
      <Button onClick={() => props.onSubmit(props.data.email)}>Submit</Button>
    </div>
  );
};

export default View;
