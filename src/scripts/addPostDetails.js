const calcPostAge = (datePosted) => {
  const f = Math.floor;
  const currentDate = Date.now() / 1000;
  let difference = currentDate - datePosted;
  const [
    secondsInAMinute,
    secondsInAHour,
    secondsInADay,
    secondsInAWeek,
    secondsInAMonth,
    seoncdsInAYear,
  ] = [60, 3600, 86400, 604800, 2.6298e6, 3.15576e7];
  if (difference < secondsInAMinute) {
    difference = difference + "s";
  } else if (difference < secondsInAHour) {
    difference = f(difference / 60) + "m";
  } else if (difference < secondsInADay) {
    difference = difference / 3600 + "hours";
  } else if (difference < secondsInAWeek) {
    difference = f(difference / 86400) + "d";
  } else if (difference < secondsInAMonth) {
    difference = f(difference / secondsInAWeek) + "w";
  } else if (difference < seoncdsInAYear) {
    difference = f(difference / secondsInAMonth) + "m";
  } else {
    difference = f(difference / seoncdsInAYear) + "y";
  }
  return difference;
};

const changeInnerText = (element, newText) => {
  element.innerText = newText;
};

const addTitles = (title) => {
  const titles = Array.from(document.getElementsByClassName("title"));
  titles.forEach((t) => {
    changeInnerText(t, title);
  });
};

const addAccountNames = (account_name) => {
  const accountNames = Array.from(
    document.getElementsByClassName("account_name")
  );
  accountNames.forEach((an) => {
    changeInnerText(an, account_name);
  });
};

const addPostAge = (datetime) => {
  const postAge = document.getElementById("post_age");

  changeInnerText(postAge, calcPostAge(datetime));
};

const addViews = (views) => {
  const viewsDivs = Array.from(document.getElementsByClassName("views"));
  viewsDivs.forEach((vd) => {
    changeInnerText(vd, `${views} views`);
  });
};

const addCommentCount = (comment_count) => {
  const commentsDiv = Array.from(
    document.getElementsByClassName("comment-count")
  );
  commentsDiv.forEach((cd) => {
    changeInnerText(cd, comment_count);
  });
};

const addVotes = (votes) => {
  const votesDivs = Array.from(document.getElementsByClassName("votes"));
  votesDivs.forEach((vd) => {
    changeInnerText(vd, votes);
  });
};

const addImage = (images, post) => {
  const imageDiv = document.getElementById("image");
  let animated, description, link;

  if (images) {
    [animated, description, link] = [
      images[0].animated,
      images[0].description,
      images[0].link,
    ];
  } else {
    [animated, description, link] = [
      post.animated,
      post.description,
      post.link,
    ];
  }

  let image;
  imageDiv.classList.remove("animate-pulse");
  if (animated != true) {
    image = `<img src="${link}" class="mx-auto">`;
  } else {
    image = `
      <video class="mx-auto max-h-[80vh]" autoplay loop muted controls>
        <source src="${link}" type="video/mp4">
      </video>
      `;
  }
  imageDiv.classList.remove("h-[500px]");
  imageDiv.innerHTML += image;
};

export const addData = (
  title,
  account_url,
  images,
  post,
  datetime,
  views,
  comment_count,
  votes
) => {
  addTitles(title);
  addAccountNames(account_url);
  addPostAge(datetime);
  addViews(views);
  addCommentCount(comment_count);
  addVotes(votes);
  addImage(images, post);
};
