import nc from 'next-connect'

const handler = nc()
    .get( async(req , res) => {
        res.json({message: 'OK'})
    })
    .post(() => {
        res.json({message: 'POSTED'})
    })
export default handler;