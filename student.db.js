var db = require('./connection.mysql')
const util = require('util');
const query = util.promisify(db.query).bind(db);

exports.insertStudentRecord = async (studentArr) => {
    // db.query('select * from profile', function(err, res){
    //     console.log(res)
    // })

    db.query('insert into profile (name, class, marks) values (?,?,?)',studentArr, function(err, res){
        if(err){
            console.log(err)
            return err;
        }
        console.log(res.insertId)
        return res.insertId
    })

    // var record = await query('insert into profile (name, class, marks) values (?,?,?)' ,studentArr)
    // console.log(record)
    // return record.insertId
}

exports.getAllStudent = async () => {
    // await db.query('select * from profile', (err, result)=>{
    //     console.log(result)
    // })
    var student = await query('select * from profile')
    console.log(student)
    return student
}

exports.getStudentOnCategory = async (markArr) => {
    // await db.query('select * from profile where marks >= ? and marks <= ?', markArr, (err, result)=>{
    //     console.log(result)
    // })
    var student = await query('select * from profile where marks >= ? and marks <= ?', markArr)
    return student
}