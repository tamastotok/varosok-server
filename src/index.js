const express = require('express');
const app = express();
const cors = require('cors');
const authRoute = require('./routes/auth');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Route
app.use('/auth', authRoute);

//  Connect to server
app.listen(PORT, () => console.log('Server running at port: ', PORT));
