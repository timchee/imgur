
const response = await fetch("https://api.npoint.io/bc13239283496e6574a7");
const responseJson = await response.json();
const data = responseJson.data;


export const searchByPost = () => {
    const searchInput = document.querySelector('input[type="search"]')
    const autocomplete = document.querySelector('.autocomplete-box')
    const autocompletePosts = document.querySelector('.autocomplete-box ul.posts')
    
    let count = 0
    searchInput.addEventListener("input", e => {
      const value = e.target.value;
      count++;
    
      if (count > 2) {   
        let suggestions = []
        let suggestedThree = []
          data.forEach((post) => {
            if (post.title.includes(value)) {
              autocomplete.classList.remove('hidden')
              autocomplete.classList.add('flex')
              suggestions.push(post)
              suggestedThree = suggestions.slice(0, 3)
            }
            return suggestedThree
          })
        
          let currentHref = window.location.href
            if (currentHref.includes("pages")) {
              return currentHref
              } else {
                currentHref = currentHref + 'pages/'
              }
          suggestedThree.forEach((post) => {
            autocompletePosts.innerHTML = `<li class="border-b-white w-full"><a class="truncate w-full inline-block" href="${currentHref}gallery.html?postId=${post.id}">${post.title}</a></li>`
          })
      }

      // if (value == null) {
      //   console.log('null')
      //   // autocomplete.classList.remove('flex')
      //   // autocomplete.classList.add('hidden')
      // }
    })
}

const responseTags = await fetch("https://api.npoint.io/c84c906dc1ecf067f09a");
const responseTagsJson = await responseTags.json();
const tags = responseTagsJson.data.tags;
console.log(tags)

export const searchByTag = () => {
    console.log()
    const searchInput = document.querySelector('input[type="search"]')
    const autocomplete = document.querySelector('.autocomplete-box')
    const autocompleteTags = document.querySelector('.autocomplete-box ul.tags')
    
    let title = document.querySelector(".tagsLabel")
    let count = 0
    searchInput.addEventListener("input", e => {
      const value = e.target.value;
      count++;
    
      if (count > 2) {   
        let suggestions = []
        let suggestedThree = []
          tags.forEach((tag) => {
            if (tag.name.includes(value)) {
              autocomplete.classList.remove('hidden')
              autocomplete.classList.add('flex')
              suggestions.push(tag)
              suggestedThree = suggestions.slice(0, 3)
            } 
            return suggestedThree
          })
            let currentHref = window.location.href
            if (currentHref.includes("pages")) {
              return currentHref
              } else {
                currentHref = currentHref + 'pages/'
              }
          suggestedThree.forEach((tag) => {
              console.log(tag.background_hash)
              autocompleteTags.innerHTML = `<li class="flex items-center gap-2 w-full">
                <img class="w-8 h-8 rounded-sm bg-btnColor-1 " src="https://i.imgur.com/${tag.background_hash}.jpg?maxwidth=800&shape=thumb&fidelity=high">
                <a class="top-1 w-full block" href="${currentHref}tag.html?tagId=${tag.name}&featured=true" ><i class="text-gray-200 pr-1">#</i>${tag.name}</a>
            </li>`
          })
      }
    })
}
