import jwt from 'jsonwebtoken'
export const authRequired =  async(req,res,next) =>{
    const {token} = req.cookies

    if(!token) return await res.status(401).json({message: "No token, authorization denied"})

     jwt.verify(token, process.env.TOKEN_SECRET, (err,user) =>{
        if(err) return res.status(403).json({message: "Invalid token"})
        req.user = user //guardo en REQ la prop user, el valor de USER
    })

    next()
}