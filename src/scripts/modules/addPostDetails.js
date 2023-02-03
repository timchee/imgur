import { addComments } from "./addComments.js";
import { addPlaceholderComments } from "./addPlaceholderComments.js";
import { avatarImages } from "./avatarImages.js";

const postsWithComments = ["6rXPASw", "HnDIHVv", "Ac7P2Jz"];

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
    an.addEventListener("click", () => {
      location.replace(`./user.html?userName=${account_name}`);
    });
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

//Adds avatar image based on the usernames' first letter
const addAvatar = (username) => {
  const firstLetter = username.toUpperCase().charCodeAt(0) - 65;
  const avatarDivs = Array.from(document.getElementsByClassName("avatar"));
  avatarDivs.forEach((ad) => {
    ad.classList.remove("animate-pulse");
    ad.src = avatarImages[firstLetter];
    ad.setAttribute("data-name", username);
    ad.addEventListener("click", () => {
      location.replace(`./user.html?userName=${username}`);
    });
  });
};

//Calculate the time difference between now and the time a post was posted
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

const addImageSkeletons = (count) => {
  const imagesDiv = document.getElementById("images");
  for (let i = 1; i < count; i++) {
    imagesDiv.innerHTML += ` 
      <div id="d-${i}">
      <div class="h-[500px] bg-[rgba(0,0,0,.1)] my-3" id="image-${i}"></div>
      <div class="p-4 hidden sm:block text-white text-sm tracking-wider" id="description-${i}"></div>
      </div> 
    `;
  }
};

//Adds an image to the image skeleton
//Helper function for the function addImages
const addImage = (imageDiv, images, post) => {
  let animated, description, link;

  if (images) {
    [animated, description, link] = [
      images.animated,
      images.description,
      images.link,
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

const addTags = (tags, postId) => {
  const tagsDiv = document.getElementById("tags");
  tags.forEach((tag) => {
    const tagHtml = `
      <a href="./tag.html?tagId=${tag.name}&featured=false&postId=${postId}" class="rounded-full py-1 sm:py-2 px-3 sm:px-6 text-gray-100 text-xs sm:text-sm font-semibold" style="text-shadow: 0 1px 4px #000; box-shadow: 0 5px 5px rgb(0 0 0 / 25%); background-image: url('https://i.imgur.com/${tag.background_hash}_d.jpg?maxwidth=200&fidelity=grand');">${tag.display_name}
      </a>
      `;
    tagsDiv.innerHTML += tagHtml;
  });
};

//Adds images when the image skeletons are in viewport
const addImages = (images, post) => {
  const imagesDiv = document.getElementById("images");
  const imageContainers = Array.from(imagesDiv.children);
  const lazyLoad = (imageContainer) => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id.substring(2);
          const imageDiv = entry.target.firstChild.nextSibling;
          const descDiv = imageDiv.nextElementSibling;
          if (images == undefined) {
            addImage(imageDiv, undefined, post);
            if (post.description != null) {
              descDiv.innerHTML += post.description;
            }
          } else {
            addImage(imageDiv, images[id], post);
            if (images[id].description != null) {
              descDiv.innerHTML += images[id].description;
            }
          }
          observer.disconnect();
        }
      });
    });
    io.observe(imageContainer);
  };
  imageContainers.forEach(lazyLoad);
};

//Main function
export const addData = async (post) => {
  addTitles(post.title);
  addAccountNames(post.account_url);
  addPostAge(post.datetime);
  addViews(post.views);
  addCommentCount(post.comment_count);
  addVotes(post.ups - post.downs);
  let imageCount;
  if (post.images == undefined) {
    imageCount = 1;
  } else {
    imageCount = post.images.length;
  }
  addImageSkeletons(imageCount);
  addImages(post.images, post);
  addAvatar(post.account_url);
  addTags(post.tags, post.id);
  const hasPlaceholderComments = !postsWithComments.includes(post.id);
  if (hasPlaceholderComments) {
    await addPlaceholderComments(post.comment_count);
  } else {
    await addComments(post.id);
  }
};
