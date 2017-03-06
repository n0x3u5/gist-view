const express = require('express')

const router = express.Router()

router.use('/', (req, res, next) => { next() })

router.post('/', (req, res) => { res.send('Post received!') })

router.get('/:user', (req, res) => {
  const user = req.params.user
  res.send(user)
})

module.exports = router
