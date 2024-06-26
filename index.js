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
    if (foundMonster) {
    renderOneMonster(foundMonster)
    } else alert("Monster not found! Please check your spelling and try again.")
})


  function renderOneMonster(monster){
    let monsterCollection = document.getElementById("monster-collection")
    let numberOfHates = 0
    let li = document.createElement("li")
    let div = document.createElement("div")
    let div2 = document.createElement("div")
    let h4 = document.createElement("h4")
    let p = document.createElement("p")
    let img = document.createElement("img")
    let span = document.createElement("span")
    let hateButton = document.createElement("button")
    let deleteButton = document.createElement("button")
    
    let monsterName = monster.name.split(' ')
    let monsterNameTitle = monsterName.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    
    li.className = "card"
    hateButton.innerText = "Hate this monster"
    hateButton.className = "hate-button"
    deleteButton.className = "delete-button"
    deleteButton.innerText = "Remove from collection"
    span.className = "hate-count"
    span.innerText = `Hates: ${numberOfHates}`
    div.className = "content"
    h4.className = "title"
    h4.innerText = monsterNameTitle
    img.src = monster.image
    img.width = 250
    img.height = 250

    div2.appendChild(hateButton)
    div2.appendChild(deleteButton)
    p.appendChild(img)
    p.appendChild(span)
    p.appendChild(div2)
    h4.appendChild(p)
    div.appendChild(h4)
    li.appendChild(div)
    
    li.querySelector(".hate-button").addEventListener("click", () => {
       numberOfHates+= 1
       li.querySelector("span").innerText = `Hates: ${numberOfHates}`
    })

    li.querySelector(".delete-button").addEventListener("click", () => li.remove())

    monsterCollection.appendChild(li)
    li.addEventListener("mouseover", () => li.style.backgroundColor = "grey")
    li.addEventListener("mouseleave", () => li.style.backgroundColor = "white")
  }