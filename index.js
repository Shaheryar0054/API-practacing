fetch("README.md").then(respond => respond.text())
.then(data =>document.write(data));