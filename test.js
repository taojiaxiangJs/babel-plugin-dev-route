const { transformAsync } = require('@babel/core')

const code = `if(DEV_ROUTE){}`

const babelConfig = {
  plugins: ['./index.js'],
}

const output = transformAsync(code, babelConfig)
