export const InputMessageTypes = {
  ESTABLISH_CONNECTION_TRAINER: 'ESTABLISH_CONNECTION_TRAINER',
  ESTABLISH_CONNECTION_STUDENT: 'ESTABLISH_CONNECTION_STUDENT',
  TRAINER_APPEND_TEXT: 'TRAINER_APPEND_TEXT',
  TRAINER_SET_FULL_TEXT: 'TRAINER_SET_FULL_TEXT'
};

export const OutputMessageTypes = {
  CONNECTION_ESTABLISHED_TRAINER: 'CONNECTION_ESTABLISHED_TRAINER',
  CONNECTION_ESTABLISHED_STUDENT: 'CONNECTION_ESTABLISHED_STUDENT',
  ERROR_MULTI_TRAINER_NOT_IMPLEMENTED_YET:
    'ERROR_MULTI_TRAINER_NOT_IMPLEMENTED_YET',
  APPEND_TEXT: 'APPEND_TEXT',
  REPLACE_FULL_TEXT: 'REPLACE_FULL_TEXT'
};

export const SocketMessageTypes = {};

export const ErrorCodes = {};

export const SocketOuputMessageLiteral = {
  MESSAGE: 'message',
};
