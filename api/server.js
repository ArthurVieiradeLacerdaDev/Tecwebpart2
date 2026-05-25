import app from "./src/app.js"

const PORT = 3000

app.listen(PORT, () => {
    console.log("servidor escutando!")
})



// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end(rotas[req.url])
// })

