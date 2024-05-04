  // Function to add a new to-do item
function addItem() {
    // Get input value
    var inputValue = document.getElementById("todo-input").value;
    if (inputValue === '') {
        alert("Please enter a to-do item!");
        return;
    }

    // Create a new list item
    var li = document.createElement("li");
    var textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);

    // Add a close button to the list item
    var closeButton = document.createElement("span");
    closeButton.innerHTML = " &#x2716;";
    closeButton.classList.add("close");
    closeButton.onclick = function() {
        var listItem = this.parentElement;
        listItem.style.display = "none";
    }
    li.appendChild(closeButton);

    // Append the new item to the list
    document.getElementById("todo-list").appendChild(li);

    // Clear input field after adding item
    document.getElementById("todo-input").value = "";
}
