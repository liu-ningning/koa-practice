const ctxUtils = require('../libs/ctx-utils')

module.exports = {
  async home(ctx) {
    const { device } = ctxUtils({ ctx })

    ctx.state = Object.assign({},
      {
        title: 'Hello Demo!',
        config: JSON.stringify({
          device,
          question: 'Who is my love?',
          answer: 'Is you?',
        }),
      }
    )

    ctx.stream('demo')
    await ctx.render('demo')
  },
}
