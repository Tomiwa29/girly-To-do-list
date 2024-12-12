const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value == ''){
        alert("Girl, write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value =  "";
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
 
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

// Get reference to the color theme select dropdown
const colorThemeSelect = document.getElementById('color-theme');

// Listen for changes to the color theme
colorThemeSelect.addEventListener('change', function() {
  // Remove any existing theme classes from the body
  document.body.classList.remove('pastel', 'vibrant', 'retro', 'minimalist');
  
  // Add the selected theme class to the body
  document.body.classList.add(colorThemeSelect.value);
});
