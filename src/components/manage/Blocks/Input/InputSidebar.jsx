import React from 'react';
import { Segment } from 'semantic-ui-react';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';
import { TextWidget, SelectWidget } from '@plone/volto/components';

const messages = defineMessages({
  label: {
    id: 'Edit Label',
    defaultMessage: 'Edit Label',
  },
  required: {
    id: 'Required',
    defaultMessage: 'Required',
  },
});

const InputSidebar = (props) => {
  const value = props.data.input;
  console.log('this is require', props.data.required);
  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="Input" defaultMessage="Input" />
        </h2>
      </header>
      <Segment className="form sidebar-image-data">
        <TextWidget
          id="external"
          title={props.intl.formatMessage(messages.label)}
          required={true}
          value={value}
          onChange={(e, v) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              input: v,
            });
          }}
        />
      </Segment>
      <Segment className="form sidebar-image-data">
        <SelectWidget
          id="external"
          title={props.intl.formatMessage(messages.required)}
          required={true}
          value={props.data.required}
          choices={[
            [true, 'True'],
            [false, 'False'],
          ]}
          onChange={(e, v) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              required: v,
            });
          }}
        />
      </Segment>
    </Segment.Group>
  );
};

export default injectIntl(InputSidebar);
