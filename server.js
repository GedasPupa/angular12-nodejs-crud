import express, { urlencoded } from 'express';
import cors from 'cors';

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }))

// simple route
app.get("/", (req, res) => {
    res.json({ message: 'Sveiki atvyke į Pupos app\'ą!' });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
