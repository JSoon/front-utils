tsc
vite build
babel dist --out-dir dist
tsc src/lib/main.ts --declaration --declarationMap --emitDeclarationOnly --outDir types