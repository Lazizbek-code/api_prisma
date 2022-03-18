const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt');
const Joi = require('joi');

module.exports.getAllUsers = async (req, res)=>{
    try {
        const users = await prisma.user.findMany()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports.getOne = async (req, res)=>{
    try {
        const user = await prisma.user.findFirst({
            where: {
                id:parseInt(req.params.id)
            }
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports.create = async (req, res)=>{
    try {
        const { fullname, username, password } = req.body
        const validator = userValidator(req.body)
        if (validator.error) {
            // let message = validator.error.details.map(err => err.message);
            res.status(400).json({message: "Malumotni to'liq kiriting"})
        }else{
            const user = await prisma.user.create({
                data: {
                    fullname,
                    username,
                    password:await bcrypt.hash(password, 10),
                    active: true
                }
            })
            res.status(201).json(user)
        }
    }
    catch (error) {
        res.status(409).json({error})
    }
}

module.exports.update = async (req, res)=>{
    try {
        const { fullname, username, password } = req.body
        const { id } = req.params
        const user = await prisma.user.update({
            data: {
                fullname:data.fullname,
                username:data.username,
                password:await bcrypt.hash(data.password, 10),
            },
            where:{
                id:parseInt(id)
            }
        })
        res.status(201).json(user)
    }
    catch (error) {
        res.status(409).json({error})
    }
    
}

module.exports.delete = async (req, res)=>{
    try {
        const { id } = req.params
        const deletedUser = await prisma.user.delete({
            where:{
                id:parseInt(id)
            }
        })
        res.status(201).json(deletedUser)
    }
    catch (error) {
        res.status(409).json({error})
    }
}

module.exports.changeActive = async (req, res)=>{
    const user = await prisma.user.findFirst({
        where: {
            id:parseInt(req.params.id)
        }
    })
    const updateUser = await prisma.user.update({
        data: {
            active:!user.active,
        },
        where:{
            id:parseInt(req.params.id)
        }
    })

    res.json(updateUser)

}

userValidator = (fields) => {
    const validatorSchema = Joi.object({
        fullname: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.required(),
    })

    return validatorSchema.validate(fields);
}