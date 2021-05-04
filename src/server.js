const express = require('express');

// Setup an Express server
const app = express();
app.use(express.static('public'));

app.get('/register', function(req, res) {
    res.send(req.query.id+','+req.query.name); // 1,siwa 출력
  })

app.get('/topic', function(req, res) {
    // url이 http://a.com/topic?id=1&name=siwa 일때
    res.send(req.query.id+','+req.query.name); // 1,siwa 출력
  })

// Listen on port
const port = process.env.PORT || 3000;
const server = app.listen(port);
console.info(`Server listening on port ${port}`);