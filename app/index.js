'use strict';

const express = require('express');
const cors = require('cors');

const route = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

route(app);

app.listen(process.env.PORT);
