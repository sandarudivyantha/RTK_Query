const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, this is the RTK Query server!');
});

// Add your routes here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});