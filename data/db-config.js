/* --------------------------------- Imports -------------------------------- */
const knex = require('knex')
const config = require('../knexfile.js')

/* -------- You must select the development object from our knexfile -------- */
const db = knex(config.development)

/* ----------------------- Export for use in codebase ----------------------- */
module.exports = db



