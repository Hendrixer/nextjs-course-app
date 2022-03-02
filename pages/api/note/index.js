import nc from 'next-connect'
<<<<<<< HEAD
import notes from '../../../src/data/data';

const handler = nc()
    .post((req, res) => {
        const note = {
            ...req.body,
            id: Date.now()
        }
        notes.push(note)
        res.json({data: note})
    })
    .get((req, res) => {
        res.json({data: notes})
    })

export default handler;
=======
import notes from '../../../src/data/data'

const handler = nc()
  .get((req, res) => {
    res.json({data: notes})
  })
  .post((req, res) => {
    const id = Date.now()
    const note = {...req.body, id}

    notes.push(note)
    res.json({data: note})
  })
  

export default handler
>>>>>>> master
