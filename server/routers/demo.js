const Router = require('koa-router')
const demo = require('../controllers/demo')

const router = new Router()

router.get('/demo', demo.home)

module.exports = router
