import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser';
import env from './env';
import { checkAuth } from './middleware/auth.middleware';

const app = express()

//exress config and body 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(cookieParser())
//middleware
app.use(checkAuth)

//router import
import homeRoute from './routers/home.route'
import aboutRoute from './routers/about.route'
import contactRoute from './routers/contact.route'
import authRoute from './routers/auth.route'
import profilRoute from './routers/profil.route'
import logoutRoute from './routers/logout.route'
import addPageRoute from './routers/addpage.route'
import postRoute   from   './routers/post.route'

//ejs setting 
app.set('view engine' , 'ejs')

//router register
app.use('/' , homeRoute)
app.use('/about' , aboutRoute)
app.use('/contact' , contactRoute)
app.use('/auth' , authRoute)
app.use('/profil' , profilRoute)
app.use('/logout' , logoutRoute)
app.use('/addpost' , addPageRoute)
app.use('/post' , postRoute)


//404 not fount page
app.use((req,res , next) => {
    res.render('404' , {name:req.name})
    next()
} )

//port setting
const port = env.obj.PORT || 3030
app.listen(port , () => { console.log('server is running ' + port);
})



