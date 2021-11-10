const express = require('express');
const router = express.Router();
const pool =  require('../config/db.js');

router.get('/tweets', async (req, res) => {
    pool.getConnection( (err, conn) => {
        if (err) throw err;

        try {
            const qry = `SELECT photo.source, event.title FROM photo, event WHERE event.title = event.title limit 200`;
            conn.query(qry, (err, result) => {
                conn.release();
                if (err) throw err;
                res.send(JSON.stringify(result));
            });
        } catch (err) {
            console.log(err);
            res.end();
        }
    });
});

router.post('/addTweet', async (req, res) => {
    const userTweet = req.body.tweetInput;

    pool.getConnection( (err, conn) => {
        if (err) throw err;

        const qry = `SELECT photo.source, event.title FROM photo, event WHERE event.title = event.title limit 200`;
        conn.query(qry, [userTweet], (err, result) => {
            conn.release();
            if (err) throw err;
        });

        res.redirect('/tweets');
        res.end();
    });
});

module.exports = router;