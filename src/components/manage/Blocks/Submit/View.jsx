import React, { useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import { Toast } from '@plone/volto/components';
import { useSelector } from 'react-redux';

const View = (props) => {
  const { loaded, error } = useSelector((state) => ({
    loaded: state.emailNotification.emailSend.loaded,
    error: state.emailNotification.emailSend.error,
  }));
  useEffect(() => {
    toast.success(<Toast success title="Success" content="Email Sent" />);
  }, [loaded]);
  return (
    <>
      {error && <div>You got an errror</div>}
      <div style={{ marginTop: 50 }}>
        <Button onClick={() => props.onSubmit(props.data.email)}>Submit</Button>
      </div>
    </>
  );
};

export default View;
