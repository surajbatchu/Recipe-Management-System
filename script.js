function saveRecipe() {
    let name = document.getElementById('recipeName').value;
    let method = document.getElementById('methodType').value;
    let ingredients = document.getElementById('ingredients').value;
    let description = document.getElementById('description').value;
  
    if (name && method && ingredients && description) {
      let recipeList = document.getElementById('recipeList');
  
      let card = document.createElement('div');
      card.className = 'recipe-card';
  
      card.innerHTML = `
        <h3>${name}</h3>
        <p><b>Method:</b> ${method}</p>
        <p><b>Ingredients:</b> ${ingredients}</p>
        <p><b>Description:</b> ${description}</p>
        <button onclick="editRecipe(this)">Edit</button>
        <button onclick="this.parentElement.remove()">Delete</button>
      `;
  
      recipeList.appendChild(card);
      document.getElementById('recipeForm').reset();
    } else {
      alert('Fill all fields!');
    }
  }
  
  function editRecipe(button) {
    let card = button.parentElement;
    let name = prompt("Edit Recipe Name", card.children[0].innerText);
    let method = prompt("Edit Method", card.children[1].innerText.replace('Method: ', ''));
    let ingredients = prompt("Edit Ingredients", card.children[2].innerText.replace('Ingredients: ', ''));
    let description = prompt("Edit Description", card.children[3].innerText.replace('Description: ', ''));
  
    if (name && method && ingredients && description) {
      card.children[0].innerText = name;
      card.children[1].innerHTML = `<b>Method:</b> ${method}`;
      card.children[2].innerHTML = `<b>Ingredients:</b> ${ingredients}`;
      card.children[3].innerHTML = `<b>Description:</b> ${description}`;
    }
  }
  