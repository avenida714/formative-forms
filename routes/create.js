const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("hey")
});

// router.post('/', (req, res) => {
//         res.render('create-post', {})
//         users.push({
//             firstName,
//             lastName,
//             email,
//             password,
//             confirmedPassword
//         })
//     }
// )

module.exports = router;