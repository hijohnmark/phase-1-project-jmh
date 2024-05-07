const createMonsterButton = document.querySelector("form")
  
  
  
    createMonsterButton.addEventListener("submit", (e) => {
    e.preventDefault()
    let monsterObj = {
      name:e.target.name.value,
      image:e.target.image.value,
      likes: 0
    }
    renderOneMonster(monsterObj)
    postNewMonster(monsterObj)

  })
  
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
    button.innerText = "Like this toy!"
    button.className = "like-button"
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
    
    li.querySelector(".hate-button").addEventListener("click", () => {
      monster.hates+= 1
      li.querySelector("span").innerText = `Hates: ${monster.hates}`
      updateHates(monster)
    })

    monsterCollection.appendChild(li)
  }
  
  const getAllMonsters = () => {
    fetch("http://localhost:3000/toys")
    .then(response => response.json())
    .then(data => data.forEach(monster => renderOnemonster(monster)))
    }

  getAllMonsters()
  
  const postNewMonster = (monsterObj) => {
    fetch("http://localhost:3000/toys",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(toyObj)
    })
    .then(res => res.json())
    .then(newMonster => {
      monsterObj.id = newMonster.id
      updateLikes(monsterObj)
    })
  }
  
  const updateLikes = (monsterObj) => {
    fetch(`http://localhost:3000/toys/${monsterObj.id}`,{
      method:"PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(monsterObj)
    })
  }
