import bcrypt from 'bcryptjs'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    try{
        const {name, email, password} = req.body
        if(password.length<6)
            return res.status(400).json({success:false, message:'Пароль должен содержать более 6 символов'})
            const emailLowerCase = email.toLowerCase()
    const existedUser = await User.findOne({email:emailLowerCase})
        if(existedUser) return res.status(400).json({success:false, message:'Пользователь уже существует'})
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = await User.create({
            name,
            email:emailLowerCase,
            password:hashedPassword
        })
        const {_id:id, ava} = user
        const token = jwt.sign({id, name, ava}, process.env.JWT_SECRET, {expiresIn:'1h'})
        res.status(201).json({success:true, result:{id, name, email:user.email, ava, token}})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:'Something went wrong! Try again later'})

    }
}