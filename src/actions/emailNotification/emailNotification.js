/**
 * emailNotification actions.
 * @module actions/emailNotification/emailNotification
 */

import {
  EMAIL_NOTIFICATION,
  EMAIL_SEND,
} from '@plone/volto/constants/ActionTypes';

/**
 * Email notification function
 * @function emailNotification
 * @param {string} from User id
 * @param {string} message Old password.
 * @param {string} name New password.
 * @param {string} subject New password.
 * @returns {Object} Edit password action.
 */
export function emailNotification(from, message, name, subject) {
  return {
    type: EMAIL_NOTIFICATION,
    request: {
      op: 'post',
      path: '/@email-notification',
      data: {
        from,
        message,
        name,
        subject,
      },
    },
  };
}
export function emailSend(from, message, name, subject, to) {
  return {
    type: EMAIL_SEND,
    request: {
      op: 'post',
      path: '/@email-send',
      data: {
        from,
        message,
        name,
        subject,
        to,
      },
    },
  };
}
