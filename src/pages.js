const schools = require('./database/data')

module.exports = {
    index(req,res){
        return res.render('index')
    },

    schools(req,res){
        return res.render('schools',{ schools })
    },

    school(req,res){
        return res.render('school')
    },

    createSchool(req,res){
        return res.render('create-school')

    }
}