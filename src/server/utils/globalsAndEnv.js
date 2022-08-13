require('dotenv').config();

const logger = require('../services/helpers/logger');
global.logger = logger();
