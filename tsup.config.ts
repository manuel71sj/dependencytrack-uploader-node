import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/cli.ts', 'src/uploader.ts'],
  format: ['cjs'],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: false,
  target: 'node18',
  splitting: false,
})
