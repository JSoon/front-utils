tsc
vite build
babel dist --out-dir dist
tsc src/lib/main.ts --declaration --emitDeclarationOnly --outDir types