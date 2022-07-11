let nameList = ['Manu Mustermann', 'Fabi Ferkel', 'Tanja Tomate'];
let phoneList = ['0123-456789', '0123-987654', '0123-123789'];

load(); 


function render() {
  let content = document.getElementById('content'); 

  content.innerHTML = ``; 
  content.innerHTML += `<h1>P H O N E B O O K</h1>`;
  content.innerHTML += `
  <div class="input">
    <input id="nameInput" placeholder="Name">
    <input id="phoneInput" placeholder="Nummer">
    <button id="saveButton" onclick="addContact()">Speichern</button>
      <br><br>
  </div>`;

  for (let i = 0; i < nameList.length; i++) {
    const names = nameList[i]; 
    const phones = phoneList[i];

    content.innerHTML += `
    <div class="card">
      <b>Name: </b>${names} <br><br>
      <b>Nummer: </b>${phones} <br><br>
      <button id="deleteButton" onclick="deleteContact(${i})"><img src="icons/delete.png" class="deleteImg"></button>
    </div><br>`;
  }
}


function addContact() {
  let name = document.getElementById('nameInput'); 
  let phone = document.getElementById('phoneInput');

  nameList.push(name.value);
  phoneList.push(phone.value);

  render(); 
  save();
}


function deleteContact(i) {
  nameList.splice(i, 1);
  phoneList.splice(i, 1);

  render();
  save();
}


function save() {
  let nameAsText = JSON.stringify(nameList);
  let phoneAsText = JSON.stringify(phoneList);

  localStorage.setItem("nameList", nameAsText); 
  localStorage.setItem("phoneList", phoneAsText);
}


function load() {
  let nameAsText = localStorage.getItem('nameList'); 
  let phoneAsText = localStorage.getItem('phoneList');

  if (nameAsText && phoneAsText) {   
    nameList = JSON.parse(nameAsText);
    phoneList = JSON.parse(phoneAsText);
  }
}
