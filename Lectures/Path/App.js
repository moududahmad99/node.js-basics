const { log } = require('console')
const path = require('path')

log(path.basename)
log(path.join)

const extension = path.extname('server.js')
log(extension)

const joinName = path.join(__dirname + '/Thunder')
log(joinName)

const joinNamePrev = path.join(__dirname + '/../Thunder')
log(joinNamePrev)