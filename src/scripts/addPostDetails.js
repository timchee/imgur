const avatarImages = [
  "https://imgur.com/user/adamelias/avatar",
  "https://imgur.com/user/beepbeepmeow/avatar",
  "https://imgur.com/user/camelbackjack/avatar",
  "https://imgur.com/user/david42/avatar",
  "https://imgur.com/user/ethox/avatar",
  "https://imgur.com/user/finnwin/avatar",
  "https://imgur.com/user/gahidus/avatar",
  "https://imgur.com/user/henriksen1/avatar",
  "https://imgur.com/user/iwasdoingfinelurking/avatar",
  "https://imgur.com/user/jinky74/avatar",
  "https://imgur.com/user/kcloud/avatar",
  "https://imgur.com/user/lordsmish/avatar",
  "https://imgur.com/user/mwasbabu16/avatar",
  "https://imgur.com/user/noncanadiangoose/avatar",
  "https://imgur.com/user/opus68/avatar",
  "https://imgur.com/user/psuedon/avatar",
  "https://imgur.com/user/quade/avatar",
  "https://imgur.com/user/rightyouareken87/avatar",
  "https://imgur.com/user/seanjohn/avatar",
  "https://imgur.com/user/trippingthelightfantastic/avatar",
  "https://imgur.com/user/upvotemypics/avatar",
  "https://imgur.com/user/vodray/avatar",
  "https://imgur.com/user/wessyfbaby/avatar",
  "https://imgur.com/user/xfamousx0/avatar",
  "https://imgur.com/user/yannireddit/avatar",
  "https://imgur.com/user/zaazzz/avatar",
];

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

const addAvatar = (username) => {
  const firstLetter = username.toUpperCase().charCodeAt(0) - 65;
  const avatarDivs = Array.from(document.getElementsByClassName("avatar"));
  avatarDivs.forEach((ad) => {
    ad.classList.remove("animate-pulse");
    ad.src = avatarImages[firstLetter];
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

const addTags = (tags) => {
  const tagsDiv = document.getElementById("tags");
  console.log(tagsDiv);
  tags.forEach((tag) => {
    const tagHtml = `
      <a href="/pages/tag.html?tagId=${tag.name}" class="rounded-full py-1 sm:py-2 px-3 sm:px-6 text-gray-100 text-xs sm:text-sm font-semibold" style="text-shadow: 0 1px 4px #000; box-shadow: 0 5px 5px rgb(0 0 0 / 25%); background-image: url('https://i.imgur.com/${tag.background_hash}_d.jpg?maxwidth=200&fidelity=grand');">${tag.display_name}
      </a>
      `;
    tagsDiv.innerHTML += tagHtml;
  });
};

// <img src = "https://i.imgur.com/${tag.background_hash}_d.jpg?maxwidth=200&fidelity=grand"/>

export const addData = (
  title,
  account_url,
  images,
  post,
  datetime,
  views,
  comment_count,
  votes,
  tags
) => {
  addTitles(title);
  addAccountNames(account_url);
  addPostAge(datetime);
  addViews(views);
  addCommentCount(comment_count);
  addVotes(votes);
  addImage(images, post);
  addAvatar(account_url);
  addTags(tags);
};
