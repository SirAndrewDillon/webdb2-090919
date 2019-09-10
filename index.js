const server = require("./server.js")
const PORT = process.env.PORT || 6868;
require('dotenv').config()


server.listen(PORT, () => {
  console.log(`Server reporting for duty on port:- ${PORT}...`);
});

