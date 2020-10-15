var dao = require('./student.db')
exports.saveStudentProfile = async (student) => {
    // console.log(student)
    var studentArr = [student.name, student.class, student.marks]
    var id = await dao.insertStudentRecord(studentArr)
    return id
}

exports.getAllStudent = async () => {
    var studentList = await dao.getAllStudent()
    return studentList
}

exports.getStudentOnCategory = async (category) => {
    let markStart = 0
    let markEnd = 0
    if(category === 'good'){
        markStart = 70
        markEnd = 90
    }else if(category === 'excellent'){
        markStart = 90
        markEnd = 100
    }else{
        markStart = 50
        markEnd = 70
    }
    let markArr = [markStart, markEnd]
    var studentList = await dao.getStudentOnCategory(markArr)
    return studentList
}