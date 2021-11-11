const element = document.createElement("cv-experience");
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
element.spreadsheetId = params.id || "";
document.body.appendChild(element);
