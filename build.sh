tsc
vite build
babel dist --out-dir dist
# https://github.com/vitejs/vite/issues/2049
tsc src/lib/main.ts --declaration --declarationMap --emitDeclarationOnly --esModuleInterop --outDir types