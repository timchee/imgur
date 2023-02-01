const body = document.querySelector("body");
const upvoteBtn = document.querySelector(".upvote");
const downvoteBtn = document.querySelector(".downvote");
const favoriteBtn = document.querySelector(".favorite");
const upvoteBanner = document.querySelector("#upvote-banner");
const downvoteBanner = document.querySelector("#downvote-banner");
const favoriteBanner = document.querySelector("#favorite-banner");
const votes = document.querySelector(".votes");

const addUpvoteBanner = (e) => {
  {
    e.stopPropagation();
    upvoteBanner.classList.toggle("hidden");
    downvoteBanner.classList.add("hidden");
    favoriteBanner.classList.add("hidden");

    body.addEventListener("click", (event) => {
      event.stopPropagation();
      upvoteBanner.classList.add("hidden");
    });
  }
};
const addDownvoteBanner = (e) => {
  {
    e.stopPropagation();
    downvoteBanner.classList.toggle("hidden");
    upvoteBanner.classList.add("hidden");
    favoriteBanner.classList.add("hidden");

    body.addEventListener("click", (event) => {
      event.stopPropagation();
      downvoteBanner.classList.add("hidden");
    });
  }
};

const addFavoriteBanner = (e) => {
  {
    e.stopPropagation();
    favoriteBanner.classList.toggle("hidden");
    downvoteBanner.classList.add("hidden");
    upvoteBanner.classList.add("hidden");

    body.addEventListener("click", (event) => {
      event.stopPropagation();
      favoriteBanner.classList.add("hidden");
    });
  }
};

const upvotePost = () => {
  if (upvoteBtn.firstChild.nextSibling.getAttribute("fill") == "none") {
    upvoteBtn.firstChild.nextSibling.setAttribute("fill", "#1bb76e");
    upvoteBtn.firstChild.nextSibling.setAttribute("stroke", "#1bb76e");
    if (downvoteBtn.firstChild.nextSibling.getAttribute("fill") == "none") {
      votes.innerHTML = Number(votes.innerHTML) + 1;
    } else {
      downvoteBtn.firstChild.nextSibling.setAttribute("fill", "none");
      downvoteBtn.firstChild.nextSibling.setAttribute("stroke", "#fff");
      votes.innerHTML = Number(votes.innerHTML) + 2;
    }
  } else {
    upvoteBtn.firstChild.nextSibling.setAttribute("fill", "none");
    upvoteBtn.firstChild.nextSibling.setAttribute("stroke", "#fff");
    votes.innerHTML = Number(votes.innerHTML) - 1;
  }
};
const downvotePost = () => {
  if (downvoteBtn.firstChild.nextSibling.getAttribute("fill") == "none") {
    downvoteBtn.firstChild.nextSibling.setAttribute("fill", "#fc6369");
    downvoteBtn.firstChild.nextSibling.setAttribute("stroke", "#fc6369");
    if (upvoteBtn.firstChild.nextSibling.getAttribute("fill") == "none") {
      votes.innerHTML = Number(votes.innerHTML) - 1;
    } else {
      upvoteBtn.firstChild.nextSibling.setAttribute("fill", "none");
      upvoteBtn.firstChild.nextSibling.setAttribute("stroke", "#fff");
      votes.innerHTML = Number(votes.innerHTML) - 2;
    }
  } else {
    downvoteBtn.firstChild.nextSibling.setAttribute("fill", "none");
    downvoteBtn.firstChild.nextSibling.setAttribute("stroke", "#fff");
    votes.innerHTML = Number(votes.innerHTML) + 1;
  }
};
const favoritePost = () => {
  if (favoriteBtn.firstChild.nextSibling.getAttribute("fill") == "none") {
    favoriteBtn.firstChild.nextSibling.setAttribute("fill", "#34cfa8");
    favoriteBtn.firstChild.nextSibling.setAttribute("stroke", "#34cfa8");
  } else {
    favoriteBtn.firstChild.nextSibling.setAttribute("fill", "none");
    favoriteBtn.firstChild.nextSibling.setAttribute("stroke", "#fff");
  }
};
export const addEngagementBar = () => {
  const loggedIn = sessionStorage.getItem("loggedIn");
  if (loggedIn === null || loggedIn === "false") {
    upvoteBtn.addEventListener("click", addUpvoteBanner, { capture: false });

    downvoteBtn.addEventListener("click", addDownvoteBanner, {
      capture: false,
    });

    favoriteBtn.addEventListener("click", addFavoriteBanner, {
      capture: false,
    });
  } else {
    upvoteBtn.addEventListener("click", upvotePost, { capture: false });
    downvoteBtn.addEventListener("click", downvotePost, { capture: false });
    favoriteBtn.addEventListener("click", favoritePost, { capture: false });
  }
};
