const express = require('express')
const router = express.Router()

router.post('/signin', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const googleId = req.body.googleId
    const channelName = req.body.channelName
    const profilePictureUrl = req.body.imageUrl

    User.create({
        name: name,
        email: email,
        googleId: googleId,
        channelName: channelName,
        profilePictureUrl: profilePictureUrl,
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router