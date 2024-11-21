const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
app.use(express.json());

//app.use(express.static("frontend/public"));
app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'public')));

app.get('*', (req, res) => {
    // res.sendFile(indexPath);
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
