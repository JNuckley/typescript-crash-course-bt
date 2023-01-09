# TYPESCRIPT

## installation

- npm i typescript
- To check the install run
  tsc -v

To compile a ts file

- tsc index
- tsc - this will compile any typescript file in the folder
- tsc --watch index

To create a config file

- tsc --init

In the config file...

- You can make the compiled js file get created in a specific out directory by uncommenting the outDir part of the config and change it to ./dist or whatever you would prefer
- rootDir is where you want the source code so you can rearrange the project directory by changing this to ./src as standard in react.

To run the index file

- node index

create react app with typescript in the same folder, use the .
-npx create-react-app . --template typescript
