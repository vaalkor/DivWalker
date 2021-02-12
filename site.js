fetch("divwalker.js").then(x=>x.text()).then(x=>updateDivWalkerLink(x));

function updateDivWalkerLink(code)
{
    let link = document.getElementById("divWalkerLink");
    link.setAttribute("href", `javascript:(function(){${code}})();`);
    link.innerText = "DivWalker";
}