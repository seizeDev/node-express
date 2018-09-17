/**
 * Created by lizhen on 2017/11/30.
 */
const port = 3100
const spdy = require('spdy')
const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
app.get('*', (req, res) => {
    res
        .status(200)
        .json({message: 'ok'})
})
const options = {
    key: fs.readFileSync(__dirname + '/http2Key/server.key'),
    cert:  fs.readFileSync(__dirname + '/http2Key/server.crt')
}
spdy
    .createServer(options, app)
    .listen(port, (error) => {
        if (error) {
            console.error(error)
            return process.exit(1)
        } else {
            console.log('Listening on port: ' + port + '.')
        }
    })