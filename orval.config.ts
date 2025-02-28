import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: 'https://nlw-connect-node-js.onrender.com/docs/json',
    output: {
      target: './src/http/api.ts',
      client: 'fetch',
      httpClient: 'fetch',
      clean: true,
      baseUrl: 'https://nlw-connect-node-js.onrender.com',
      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
      },
    },
  },
})
