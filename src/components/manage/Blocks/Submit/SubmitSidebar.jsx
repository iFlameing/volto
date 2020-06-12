import React from 'react';
import { Segment } from 'semantic-ui-react';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';
import { TextWidget } from '@plone/volto/components';

const messages = defineMessages({
  label: {
    id: 'Email',
    defaultMessage: 'Email',
  },
});

const SubmitSidebar = (props) => {
  const value = props.data.email;
  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>
          <FormattedMessage id="Submit" defaultMessage="Submit" />
        </h2>
      </header>
      <Segment className="form sidebar-image-data">
        <TextWidget
          id="external"
          title={props.intl.formatMessage(messages.label)}
          required={false}
          value={value}
          onChange={(e, v) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              email: v,
            });
          }}
        />
      </Segment>
    </Segment.Group>
  );
};

export default injectIntl(SubmitSidebar);
