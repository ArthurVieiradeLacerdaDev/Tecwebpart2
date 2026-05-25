const express = require("express")
const app = express()

const PORT = 3000

app.use((express.json()))

app.post("/usuarios", (req, res) => {
    const nome = req.body.name;
    const email = req.body.email;

    res.json({
        mensagem: "Dados recebidos",
        nome: nome,
        email: email
    });
});

app.post("/reservas", (req, res) => {
    const laboratorio = req.body.laboratorio;
    const dia = req.body.dia;
    const horario = req.body.horario;

    res.json({
        mensagem: "reserva recebida com sucesso",
        laboratorio,
        dia,
        horario
    });
});

app.listen(PORT, () => {
    console.log(`servidor rodando! acesse o navegador: http:localhost:${PORT}`)
})

app.get("/", (req, res) => {
    res.send("Págima inicial")
})

app.get("/laboratorios", (req, res) => {
    const bloco = req.query.bloco
    const turno = req.query.turno

    res.json({
        bloco: bloco,
        turno: turno
    })
})

app.get("/reservas", (req, res) => {
    const dia = req.query.dia;

    res.send(`Reservas para o dia: ${dia}`)
})

// app.get("/laboratorios/:id", (req, res) => {
//     res.send(`Laboratorio ${req.params.id}`)
// })

app.get("/laboratorios/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        mensagem: "laboratorio solicitado",
        id: id
    })
})

app.get("/cursos/:curso/disciplinas/:disciplina", (req, res) => {

    res.json({
        curso: req.params.curso,
        disciplina: req.params.disciplina
    })
})




