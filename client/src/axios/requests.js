export const serverOrigin = 'http://localhost:8000';

export const reqFileWrapper = (src) => {
  if (!src) return null;
  else return serverOrigin + '/' + src;
};

export const validFileWrapper = (fileImg) => {
  if (typeof fileImg === 'object') {
    if (fileImg.name) {
      return window.URL.createObjectURL(fileImg);
    } else {
      return null;
    }
  } else {
    return reqFileWrapper(fileImg);
  }
};

//API REQUESTS ENUMS
export const reqs = {
  //admin
  USER_LOGIN: '/api/user/login', //post
  ADMIN_LOGOUT: '/api/admin/logout', //get
  IS_ADMIN_VALID: '/api/admin/auth', //get

  //contenst
  GET_CONTENTS: '/api/content/all', //get
  SEARCH_CONTENTS: '/api/search/', //post
  CREATE_CONTENT: '/api/content/create', //post
  BANGLA_TEXT_GENERATOR: '/api/bot/translate', //post

  //bot
  QUES_BOT: '/api/bot/ques', //post
  GET_ALL_CHATS: '/api/bot/msgs', //get-- /:chat_bot_id

  //projects
  GET_PROJECT: '/api/projects', //post
  CREATE_PROJECT: '/api/projects/create', //post
  UPDATE_PROJECT_CONTENT: '/api/projects/update-content', //put
  EDIT_PROJECT_INFOS: '/api/projects/edit-infos', //patch
  EDIT_PROJECT_CONTENTS: '/api/projects/edit-contents', //patch
  DELETE_PROJECT_CONTENTS: '/api/projects/delete-contents', //patch
  DELETE_PROJECT: '/api/projects/delete', //delete

  //contacts
  SEND_MESSAGE_FROM_CLIENT: '/api/contact/sendMessage', //post
  GET_ALL_MESSAGES: '/api/contact/messages', //get
  SEND_EMAIL_TO_CLIENT: '/api/contact/emailToClient', //post
  SEND_SMS_TO_CLIENT: '/api/contact/smsToClient/custom', //post
};
