import React from 'react';
import { TextArea } from 'semantic-ui-react';
import {
  SidebarPortal,
  FormFieldWrapper,
  InputSidebar,
} from '@plone/volto/components';

const Edit = (props) => {
  console.log(
    'this is require from edit',
    props.data.required,
    props.data.input,
  );

  return (
    <>
      <FormFieldWrapper
        id="InputBlock"
        title={
          props.data.input?.length > 0 ? props.data.input : 'enter input label'
        }
        required={props.data.required}
      >
        <TextArea placeholder="Tell us more" />
      </FormFieldWrapper>
      <SidebarPortal selected={props.selected}>
        <InputSidebar {...props} />
      </SidebarPortal>
    </>
  );
};

export default Edit;
