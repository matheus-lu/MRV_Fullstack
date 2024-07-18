var count = 0;

function addNewToDoItem() {
    var divToDoList = document.getElementById('toDoList');
    var TextFromInputBox = document.getElementById('inputText');
    divToDoList.innerHTML = `${divToDoList.innerHTML}<p><input type="checkbox" id="checkbox${count}" onchange="checkCheckboxs(${count})"><label for="checkbox${count}" id="labelCheckbox${count}">${TextFromInputBox.value}</label></p>`;
    count ++;
};

function checkCheckboxs(checkboxCount) {
    var checkboxLabelId = document.getElementById(`labelCheckbox${checkboxCount}`);
    var checkboxCheck = document.getElementById(`checkbox${checkboxCount}`);
    if (checkboxCheck.checked) {
        checkboxLabelId.style.textDecoration = "line-through";
    } else {
        checkboxLabelId.style.textDecoration = null;
    };
};