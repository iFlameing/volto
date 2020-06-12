import React from 'react';
import { Input } from 'semantic-ui-react';
import {
  SidebarPortal,
  FormFieldWrapper,
  InputSidebar,
  TextWidget,
} from '@plone/volto/components';

const Edit = (props) => {
  console.log(
    'this is require from edit',
    props.data.required,
    props.data.input,
  );

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
