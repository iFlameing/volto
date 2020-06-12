import React from 'react';
import { Button } from 'semantic-ui-react';
import { SidebarPortal, SubmitSidebar } from '@plone/volto/components';

const Edit = (props) => {
  return (
    <>
      <div>
        <Button>Submit</Button>
      </div>
      <SidebarPortal selected={props.selected}>
        <SubmitSidebar {...props} />
      </SidebarPortal>
    </>
  );
};

export default Edit;
