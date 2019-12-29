require('dotenv').config()

const  express = require('express')
const app = express()

const jwt = require('jsonwebtoken')
app.use(express.json())
//list of poosts
const posts = [
    {
        username: 'Dafne', //person that created  the post
        title: 'Post1'
    },
    {
        username: 'Jul',
        title: 'Post2'
    }
]

//route get posts inside the app
app.get('/posts', authenticateToken, (req,res) => {
    //return a list of posts
res.json(posts.filter(post => post.username  === req.user.name))
})

//login route we want to create a toke (post)
app.post('/login', (req,res) => {
    //authenticate tthe user vid
    const username = req.body.username//for getting the user name
    const user = {name:username}
    //for creating a json web t
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken})
})

//middleware authntication  
function authenticateToken(req, res, next){
    //get the token, verify and then return user
    //header Bearer Token
    const authHeader = req.headers['authorization'] //authorization header
    const token = authHeader && authHeader.split(' ')[1]
    //step 1. create header (get token)
    if (token == null) return res.sendStatus(401)//if it have not send a eokn
    //to verufy the valid token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)// means it does have a token, a invalid one, so it does not  have access
        //pass this
        req.user = user
        next()
    })
}


//app.listen(4000)