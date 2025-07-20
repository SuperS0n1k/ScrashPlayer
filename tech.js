function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

res = await fetch("https://scratch.mit.edu/site-api/projects/shared/?page=1&ascsort=&descsort=view_count", {
    "credentials": "include",
    "headers": {
        "Accept": "application/json, text/javascript, */*; q=0.01",
		    "X-Token": document.querySelector('#app')._reactRootContainer._internalRoot.current.child.stateNode.props.store.getState().session.session.user.token,
        "X-CSRFToken": getCookie("scratchcsrftoken"),
        "X-Requested-With": "XMLHttpRequest",
        "Sec-Fetch-Mode": "cors",
    },
    "method": "GET",
    "mode": "cors"
});

d = await res.json();
d[0].pk
