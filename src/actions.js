const SUBMIT_POST = 'SUBMIT_POST';
const TITLE_CHANGE = 'TITLE_CHANGE';
const CHANGE_VOTE = 'CHANGE_VOTE';
const CHANGE_EDITING = 'CHANGE_EDITING';
const CHANGE_TITLE = 'CHANGE_TITLE';
const VERIFY_ENTER = 'VERIFY_ENTER';

export function submitPost(post) {
  return dispatch => {
    dispatch({
      type: SUBMIT_POST,
      post: post
    });
  };
};

export function titleChange(title) {
  return dispatch => {
    dispatch({
      type: TITLE_CHANGE,
      title: title
    });
  };
};

export function changeVote(id, status){
  return dispatch => {
    dispatch({
      type: CHANGE_VOTE,
      id: id,
      status: status
    })
  }

}

export function changeEditing(id, status){
  return dispatch => {
    dispatch({
      type: CHANGE_EDITING,
      id: id,
      status: status
    });
  }
}

export function changeTitle(id, title){
  return dispatch => {
    dispatch({
      type: CHANGE_TITLE,
      id: id,
      title: title
    });
  }
}


export function verifyEnter(id, key){
  return dispatch => {
    dispatch({
      type: VERIFY_ENTER,
      id: id,
      key: key
    });
  }
}
