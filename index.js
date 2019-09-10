/* ----------------------- Imports the server.js file ----------------------- */
const server = require('./server.js')

/* ----------------------- This makes the port dynamic ---------------------- */
const port = process.env.PORT || 6868

/* ---------------- Listens for port 6868 to start the server --------------- */
server.listen(port, () => {
	console.log(`\n***_Server Reporting For Duty on port: ${port}_***\n`)
})

