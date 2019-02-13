// Markdown Previewer

var initTextEditor = document.querySelector("#editor").value;
document.getElementById("preview").innerHTML = marked(initTextEditor);
    
function editingText() {
    var x = document.querySelector("#editor").value;
    document.getElementById("preview").innerHTML = marked(x);
}