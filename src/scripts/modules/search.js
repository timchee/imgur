const searchByPost = () => {

    const searchInput = document.querySelector('input[type="search"]')
    const autocomplete = document.querySelector('.autocomplete-box')
    const autocompletePosts = document.querySelector('.autocomplete-box ul.posts')
    const postsLabel = document.querySelector('.postsLabel')

    window.addEventListener('click', (e) => {
      if (e.target === autocomplete || e.target === searchInput) {
        e.stopPropagation
      } else {   
        if (autocomplete.style.display = 'flex') {
          autocomplete.style.display = 'none'
        }  
      }
    })
  
    let count = 0
    searchInput.addEventListener("input", e => {
      const value = e.target.value;
      count++;
    
      //show suggestions based on input that is two or more characters long
      if (count > 1) {   
        let suggestions = []
        let suggestedThree = []
          data.forEach((post) => {
            if (post.title.includes(value)) {
              autocomplete.classList.remove('hidden')
              autocomplete.classList.add('flex')
              suggestions.push(post)
              suggestedThree = suggestions.slice(0,3)
            }
            return suggestedThree
          })
        
         //If the input is deleted hide the autocomplete dropdown
          if (value === '') {
            autocomplete.style.display = 'none'
          } else {
            autocomplete.style.display = 'flex'
          }
        
          
          let currentHref = window.location.href
            if (currentHref.includes("pages")) {
              return currentHref
            } else {
              currentHref = currentHref + 'pages/'
        }
        let ulPosts = '';
        for (i = 0; i < suggestedThree.length; i++){
           ulPosts +=`<li class="border-b-white w-full"><a class="truncate w-full inline-block" href="${currentHref}gallery.html?postId=${suggestedThree[i].id}">${suggestedThree[i].title}</a></li>`
        }
        autocompletePosts.innerHTML = ulPosts;


        if (autocompletePosts.innerHTML == '') {
          postsLabel.classList.add('hidden')
        } else {
          postsLabel.classList.remove('hidden')
        }
        
      }
    })
}


const searchByTag = () => {
    const searchInput = document.querySelector('input[type="search"]')
    const autocomplete = document.querySelector('.autocomplete-box')
    const autocompleteTags = document.querySelector('.autocomplete-box ul.tags')
    const tagsLabel = document.querySelector(".tagsLabel")
    
    let count = 0
    searchInput.addEventListener("input", e => {
      const value = e.target.value;
      count++;
    
      //show suggestions based on input that is two or more characters long
      if (count > 1) {   
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
        
          let ul = '';
          for (i = 0; i < suggestedThree.length; i++){
             ul += `<li class="flex items-center gap-2 w-full">
             <img class="w-8 h-8 rounded-sm bg-btnColor-1 " src="https://i.imgur.com/${suggestedThree[i].background_hash}.jpg?maxwidth=800&shape=thumb&fidelity=high">
             <a class="top-1 w-full block" href="${currentHref}tag.html?tagId=${suggestedThree[i].name}&featured=true" ><i class="text-gray-200 pr-1">#</i>${suggestedThree[i].display_name}</a>
         </li>`
          }
        autocompleteTags.innerHTML = ul;
        
        
        if (autocompleteTags.innerHTML == '') {
          tagsLabel.classList.add('hidden')
        } else {
          tagsLabel.classList.remove('hidden')
        }
      }
    })
}

const searchByUser = () => {
  const searchInput = document.querySelector('input[type="search"]')
  const autocomplete = document.querySelector('.autocomplete-box')
  const autocompleteUsers = document.querySelector('.autocomplete-box ul.users')
  const usersLabel = document.querySelector('.usersLabel')
  
  let count = 0
  searchInput.addEventListener("input", e => {
    const value = e.target.value;
    count++;
  
    //show suggestions based on input that is two or more characters long
    if (count > 1) {   
      let suggestions = []
      let suggestedThree = []
        data.forEach((post) => {
          if (post.account_url.includes(value)) {
            autocomplete.classList.remove('hidden')
            autocomplete.classList.add('flex')
            suggestions.push(post)
            suggestedThree = suggestions.slice(0,3)
          }
          return suggestedThree
        })
      

        let currentHref = window.location.href
          if (currentHref.includes("pages")) {
            return currentHref
          } else {
            currentHref = currentHref + 'pages/'
      }
      console.log(suggestedThree)

      let ulUsers = '';
      for (i = 0; i < suggestedThree.length; i++){
        ulUsers += `<li class="w-full flex items-center gap-2 cursor-pointer">
        <div class="userAvatar w-8 h-8 rounded-full bg-[#34cea8] bg-cover bg-no-repeat bg-center"></div>
         <a class="truncate w-full inline-block" href="${currentHref}user.html?userName=${suggestedThree[i].account_url}">${suggestedThree[i].account_url}</a>
         </li>`   
      }
      autocompleteUsers.innerHTML = ulUsers;


      if (autocompleteUsers.innerHTML == '') {
        usersLabel.classList.add('hidden')
      } else {
        usersLabel.classList.remove('hidden')
      }
      
    }
  })
}


const response = await fetch("https://api.npoint.io/bc13239283496e6574a7");
const responseJson = await response.json();
const data = responseJson.data;


const responseTags = await fetch("https://api.npoint.io/c84c906dc1ecf067f09a");
const responseTagsJson = await responseTags.json();
const tags = responseTagsJson.data.tags;


export const addSearch = () => {
  searchByPost()
  searchByTag()
  searchByUser()
}
