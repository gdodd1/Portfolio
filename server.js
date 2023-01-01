const express = require('express');
const app = express();

app.get('/', (req, res) => {
        var dessert = 'hello';
        console.log(__dirname + "/src/index.ejs")
        // res.render(__dirname + "index.ejs", {dessert:dessert});
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});