html_md = " ";
markdown = " ";
preview = function(){
    markdown = document.getElementById("edit").innerText;
    html_md = marked.parse(markdown);
    document.getElementById("preview").innerHTML = html_md;
}