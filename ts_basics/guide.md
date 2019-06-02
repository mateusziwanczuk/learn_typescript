1. sudo apt install node-typescript
2. tsc types.ts
3. tsc types.ts -w  --> watching for file changes
4. Error: 'Cannot redeclare block-scoped variable'
    - tsc -init --> create tsconfig.json file
    - "compilerOptions": { "lib": ["es6", "dom"] }