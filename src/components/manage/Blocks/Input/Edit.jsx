import React from 'react';
import {
  SidebarPortal,
  InputSidebar,
  TextWidget,
} from '@plone/volto/components';

const Edit = (props) => {
  return (
    <>
      <TextWidget
        id="input-edit"
        title={
          props.data.input?.length > 0 ? props.data.input : 'enter input label'
        }
        required={props.data.required}
        value=""
        onChange={() => {}}
      />
      <SidebarPortal selected={props.selected}>
        <InputSidebar {...props} />
      </SidebarPortal>
    </>
  );
};

export default Edit;
