// let allMonsters = []

// const getAllMonsters = () => {
//     fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters")
//     .then(response => response.json())
//     .then(data => allMonsters = data.data)
        

// const createMonsterButton = document.querySelector("form")
  
// createMonsterButton.addEventListener("submit", (e) => {
//     e.preventDefault()
//     let foundMonster = allMonsters.find(monster => monster === e.target.value)
//     console.log(foundMonster)

//     let monsterObj = {
//       name:e.target.name.value,
//       image:e.target.image.value,
//       hates: 0
//     }
//     renderOneMonster(monsterObj)
//     // postNewMonster(monsterObj)

//   })

let allMonsters = []

const getAllMonsters = () => {
    fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters")
    .then(response => response.json())
    .then(data => allMonsters = data.data)
}

getAllMonsters()

const createMonsterForm = document.querySelector("form")

createMonsterForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const searchInput = e.target.querySelector(".input-text")
    const searchValue = searchInput.value.toLowerCase()

    const foundMonster = allMonsters.find(monster => monster.name === searchValue)
    renderOneMonster(foundMonster)
});


  
  function renderOneMonster(monster){
    let monsterCollection = document.getElementById("monster-collection")
    let li = document.createElement("li")
    let div = document.createElement("div")
    let div2 = document.createElement("div")
    let h4 = document.createElement("h4")
    let p = document.createElement("p")
    let img = document.createElement("img")
    let span = document.createElement("span")
    let button = document.createElement("button")
    
    li.className = "card"
    button.innerText = "Hate this monster!"
    button.className = "hate-button"
    span.className = "hate-count"
    span.innerText = `Hates: ${monster.hates}`
    div.className = "content"
    h4.innerText = `${monster.name}`
    img.src = `${monster.image}`
    img.width = 250
    img.height = 250

    div2.appendChild(button)
    p.appendChild(img)
    p.appendChild(span)
    p.appendChild(div2)
    h4.appendChild(p)
    div.appendChild(h4)
    li.appendChild(div)
    
    // li.querySelector(".hate-button").addEventListener("click", () => {
    //   monster.hates+= 1
    //   li.querySelector("span").innerText = `Hates: ${monster.hates}`
    //   updateHates(monster)
    // })

    monsterCollection.appendChild(li)
  }
  

    // .then(data => data.find(monster => renderOneMonster(monster)))


  getAllMonsters()
//   const postNewMonster = (monsterObj) => {
//     fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters",{
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body:JSON.stringify(monsterObj)
//     })
//     .then(res => res.json())
//     .then(newMonster => {
//       monsterObj.id = newMonster.id
//       updateLikes(monsterObj)
//     })
//   }
  
//   const updateLikes = (monsterObj) => {
//     fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters/${monsterObj.id}`,{
//       method:"PATCH",
//       headers:{
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(monsterObj)
//     })
//   }
