const l = console.log;

const getPostId = () => {
  return window.location.search.split("=")[1];
};

const getPostById = async (postId) => {
  const response = await fetch("../data/gallery.json");
  const responseJson = await response.json();
  const data = responseJson.data;
  let post = "Post not found";
  data.forEach((element) => {
    if (element.id === postId) {
      post = element;
    }
  });
  return post;
};

const getPostDetails = (post) => {
  l(post);
};

const calcPostAge = (datePosted) => {
  f = Math.floor;
  const currentDate = Date.now() / 1000;
  difference = currentDate - datePosted;
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

const init = async () => {
  const postId = getPostId();
  const post = await getPostById(postId);
  getPostDetails(post);
  const {
    account_url,
    comment_count,
    datetime,
    downs,
    images,
    images_count,
    points,
    score,
    tags,
    title,
    ups,
    views,
  } = post;

  const { animated, description, link } = images[0];
  const titles = Array.from(document.getElementsByClassName("title"));
  const accountNames = Array.from(
    document.getElementsByClassName("account_name")
  );
  const postAge = document.getElementById("post_age");
  const image = document.getElementById("image");
  image.src = link;
  l(image.src);
  titles.forEach((t) => {
    changeInnerText(t, title);
  });
  accountNames.forEach((an) => {
    changeInnerText(an, account_url);
  });
  changeInnerText(postAge, calcPostAge(datetime));
};

init();
