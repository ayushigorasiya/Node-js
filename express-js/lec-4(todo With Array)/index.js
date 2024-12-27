const express = require('express');
const port = 8020;
const app = express();


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


let record = [];


app.get('/', (req, res) => {
  
    return res.render('table', { record });
});

app.get('/add', (req, res) => {
    return res.render('form');
});

app.post('/adduser', (req, res) => {
    const { username, useremail, userpassword, userphone } = req.body;
    let obj = {
        id: Date.now(),
        name: username,
        email: useremail,
        password: userpassword,
        phone: userphone
    };
    record.push(obj);
    console.log("User successfully registered");
    return res.redirect('/');
});

app.get('/deleteuser', (req, res) => {
    let id = req.query.deleteId; 
    record = record.filter(val => val.id != id);
    return res.redirect('/');
});


app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server is running at http://localhost:${port}`);
});
