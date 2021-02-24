const { query } = require('express');
const express = require('express');
const app = express()


const Student = [{
        "roll_no": 101,
        "details": {
            "name": "ajay",
            "marks": 42,
            "age": 20
        }
    },
    {
        "roll_no": 102,
        "details": {
            "name": "amit",
            "marks": 45,
            "age": 21
        }
    },
    {
        "roll_no": 111,
        "details": {
            "name": "ramesn",
            "marks": 31,
            "age": 21
        }
    },
    {
        "roll_no": 101,
        "details": {
            "name": "ajay",
            "marks": 60,
            "age": 20
        }
    },
    {
        "roll_no": 102,
        "details": {
            "name": "amit",
            "marks": 50,
            "age": 21
        }
    },
    {
        "roll_no": 111,
        "details": {
            "name": "ramesn",
            "marks": 20,
            "age": 21
        }
    }
]

app.get('/student/:number', (req, res) => {

   const  query = req.params.number
   if( isNaN(query) )  return res.status(401).json("invalid request")
     
   filterdStudent =  Student.filter(student =>student.details.marks>query)

    return res.json(filterdStudent)


})



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})