var app = require('express')
var body = require('body-parser')
var studentService = require('./student.service')
var server = app();

server.use(body.json())

server.listen(3000)
server.get('/liststudent', async (req, res) => {
    var studentList = await studentService.getAllStudent(res)
    res.send(studentList)
})

server.post('/save', async (req, res) => {
    var student = {
        name: req.body.name,
        class: req.body.class,
        marks: req.body.marks,
    }
    await studentService.saveStudentProfile(student)

    res.send('saved')

})

server.get('/categorize/:category', async (req, res) => {
    var category = req.params.category
    let list = await studentService.getStudentOnCategory(category)
    console.log(category)
    res.send(list)

})