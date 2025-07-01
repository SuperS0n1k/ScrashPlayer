function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

fetch("https://api.scratch.mit.edu/users/f_account/projects/1191208467/views", {
    "credentials": "include",
    "headers": {
        "Accept": "*/*",
        "Accept-Language": "en-GB,en;q=0.5",
        "X-Token": document.querySelector('#app')._reactRootContainer._internalRoot.current.child.stateNode.props.store.getState().session.session.user.token,
        "X-CSRFToken": getCookie("scratchcsrftoken"),
        "Sec-Fetch-Mode": "cors",
    },
    "referrer": "https://scratch.mit.edu/",
    "method": "POST",
    "mode": "cors"
});

fetch("https://api.scratch.mit.edu/proxy/comments/project/1191208467", {
    "credentials": "include",
    "headers": {
        "Accept": "application/json",
        "Accept-Language": "en-GB,en;q=0.5",
        "X-Token": document.querySelector('#app')._reactRootContainer._internalRoot.current.child.stateNode.props.store.getState().session.session.user.token,
        "X-CSRFToken": getCookie("scratchcsrftoken"),
        "Content-Type": "application/json",
        "Sec-Fetch-Mode": "cors",
    },
    "referrer": "https://scratch.mit.edu/",
    "body": JSON.stringify({"content":"I Like Chocolate","parent_id":"","commentee_id":""}),
    "method": "POST",
    "mode": "cors"
});

