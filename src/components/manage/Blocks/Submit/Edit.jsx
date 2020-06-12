import React from 'react';
import { Message, Button } from 'semantic-ui-react';
import { SidebarPortal, SubmitSidebar } from '@plone/volto/components';

const Edit = (props) => {
  return (
    <>
      <Message>
        <Button>Submit</Button>
      </Message>
      <SidebarPortal selected={props.selected}>
        <SubmitSidebar {...props} />
      </SidebarPortal>
    </>
  );
};

export default Edit;
