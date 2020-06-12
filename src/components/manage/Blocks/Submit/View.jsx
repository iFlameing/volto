import React from 'react';
import { Button } from 'semantic-ui-react';

const View = (props) => {
  return (
    <div style={{ marginTop: 50 }}>
      <Button onClick={() => props.onSubmit(props.data.email)}>Submit</Button>
    </div>
  );
};

export default View;
