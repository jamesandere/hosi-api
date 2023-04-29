require("dotenv").config();
const Pool = require("pg").Pool;

const connectionString =
  "postgresql://postgres:ptDxTYjxI3Q44QfpskMt@containers-us-west-24.railway.app:7685/railway";

const pool = new Pool({
  connectionString,
});

module.exports = pool;
