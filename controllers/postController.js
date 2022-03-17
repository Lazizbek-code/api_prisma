const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


module.exports.getAllUsers = async ()=> {
    return await prisma.post.findMany()
}

module.exports.getOne = async (id)=>{
    const post = await prisma.post.findFirst({
        where: {
            id:parseInt(id)
        }
    })
    return post
}

module.exports.create= async (data)=>{
    try {
        const post = await prisma.post.create({
            data: {
                title:data.title,
                content: data.content
            }
        })
        return post
    }
    catch {
        return {"success":false}
    }
}

module.exports.update= async (id, data)=>{
    try {
        const post = await prisma.post.update({
            data: {
                title:data.title,
                content: data.content
            },
            where:{
                id:parseInt(id)
            }
        })
        return post
    }
    catch {
        return {"success":false}
    }
}
module.exports.delete= async (id)=>{
    try {
        const deletedPost = await prisma.post.delete({
            where:{
                id:parseInt(id)
            },
            select:{
                title:data.title,
                content: data.content
            }
        })
        return deletedPost
    }
    catch {
        return {"success":false}
    }
    
}