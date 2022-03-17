const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

module.exports.getAllUsers = async ()=>{
    return await prisma.user.findMany()
}

module.exports.getOne = async (id)=>{
    const user = await prisma.user.findFirst({
        where: {
            id:parseInt(id)
        }
    })
    return user
}

module.exports.create= async (data)=>{
    try {
        const user = await prisma.user.create({
            data: {
                fullname:data.fullname,
                username:data.username,
                password:data.password,
                active: true
            }
        })
        return user
    }
    catch {
        return {"success":false}
    }
}

module.exports.update= async (id, data)=>{
    try {
        const user = await prisma.user.update({
            data: {
                fullname:data.fullname,
                username:data.username,
                password:data.password,
            },
            where:{
                id:parseInt(id)
            }
        })
        return user
    }
    catch {
        return {"success":false}
    }
}

module.exports.delete= async (id)=>{
    try {
        const deletedUser = await prisma.user.delete({
            where:{
                id:parseInt(id)
            },
            select:{
                id:true,
                username:true
            }
        })
        return deletedUser
    }
    catch {
        return {"success":false}
    }
}
