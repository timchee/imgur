const l = console.log;

const getPostId = () => {
  return window.location.search.split("=")[1];
};

const getPostById = async (postId) => {
  const response = await fetch("https://api.npoint.io/bc13239283496e6574a7");
  const responseJson = await response.json();
  const data = responseJson.data;
  let post = "Post not found";
  let prevId = null;
  let nextId;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === postId) {
      if (data[i - 1]) {
        [post, prevId, nextId] = [data[i], data[i - 1].id, data[i + 1].id];
      } else {
        [post, nextId] = [data[i], data[i + 1].id];
      }
    }
  }
  return [post, prevId, nextId];
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
  const [post, previousPostId, nextPostId] = await getPostById(postId);
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
  const imageDiv = document.getElementById("image");
  const nextPostBtn = document.getElementById("next-btn");
  nextPostBtn.href = `./gallery.html?postId=${nextPostId}`;
  const prevPostBtn = document.getElementById("previous-btn");
  if (previousPostId == null) {
    prevPostBtn.classList.add("hidden");
  } else {
    prevPostBtn.href = `./gallery.html?postId=${previousPostId}`;
  }
  let image;
  console.log(animated == true);
  if (animated != true) {
    image = `<img src="${link}" class="mx-auto max-h-[80vh]">`;
  } else {
    image = `
    <video class="mx-auto max-h-[80vh]" autoplay loop muted controls>
      <source src="${link}" type="video/mp4">
    </video>
    `;
  }
  imageDiv.classList.remove("h-[500px]");
  imageDiv.innerHTML += image;
  titles.forEach((t) => {
    changeInnerText(t, title);
  });
  accountNames.forEach((an) => {
    changeInnerText(an, account_url);
  });
  changeInnerText(postAge, calcPostAge(datetime));

  // addSidebarPosts();
};

init();
