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
};
