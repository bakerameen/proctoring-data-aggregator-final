// importing modules
const express = require('express');
// const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
var path = require('path');


const app = express();
 const vedioRoutes = require('./route/video');

// middlewear
app.use(cors());

app.use(express.json({limit: '500mb'}));
app.use(express.urlencoded({limit: '500mb', extended: true, parameterLimit: 50000}));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});


 app.use('/api/video', vedioRoutes);

const PORT = process.env.PORT || 8080;

// Remove in Production
// app.get('/', (req, res)=> {
//     res.send('Default Rate');
//     });
    
// app.post('/api/video', (req, res)=> {  
  
//   let filePath = `/simplefiles/${Date.now()}_${req.body.name}.webm`;
//   let buffer = Buffer.from(req.body.base64, "base64");
//   fs.writeFileSync(path.join(__dirname, filePath), buffer);

//   res.status(200).json({
//     message: "Video Successfully!",    
// })

//   res.status(500).json({
//       message: "Video not Recorded",
//   })



// });
    // production 
     app.use(express.static(path.join(__dirname, 'public')));
      app.get('*', (req, res) => {
        //res.sendFile(path.join(__dirname, 'public/index.html'));
         res.sendFile(path.join(__dirname, 'public',  'index.html'));
        });
    

    


app.listen(PORT, ()=> {
    console.log('server has been started at port'+ PORT);
});




