document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("form input").forEach(function(e){var t=e.name.charAt(0).toUpperCase()+e.name.slice(1),n=document.createElement("label");n.classList.add("field-label"),n.setAttribute("for",e.id),n.textContent=t,e.placeholder=t,e.parentNode.insertBefore(n,e)})});
//# sourceMappingURL=index.0e9c39d7.js.map
