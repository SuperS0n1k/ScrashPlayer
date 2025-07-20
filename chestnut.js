function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

res = await fetch("https://api.scratch.mit.edu/proxy/featured", {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    });
d = await res.json();

fetch("https://api.scratch.mit.edu/proxy/comments/project/"+d.community_featured_projects[0].id+"", {
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
    "body": JSON.stringify({"content":"Try Me! https://scratch.mit.edu/projects/1182813934/","parent_id":"","commentee_id":""}),
    "method": "POST",
    "mode": "cors"
});
