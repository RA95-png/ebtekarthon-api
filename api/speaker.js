const express = require('express');
router = express.Router(),
routeBase = '/speaker'
;
let speaker=[{ A:'TEST'}];

router.post(routeBase, (req, res) => {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "*");
 
     speaker.push({
        name : req.body.SpeakerName , 
        position : req.body.SpeakerPosition,
        email : req.body.SpeakerEmail,
        BIO : req.body.SpeakerBIO})
        console.log(speaker)
        res.send(speaker)
  })
 router.get(routeBase , (req, res) => {
     res.send(speaker);
});

module.exports = router;