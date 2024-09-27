# Nolatech Technical Test

This is a test proejct for Nolatech. Down below you'll find the instructions to run the project.

## 1. Create a .env file, you can copy the .env.example file and rename it to .env.

## 2. Install the dependencies
```bash
npm install
```

### 3. Install json-server
```bash
npm install -g json-server
```

### 4. Start json-server
## Note: Make sure to run this command in the root of the project. If you use a different port, make sure to change the port in the `.env` file, in the API_PORT variable.
```bash
json-server --watch db.json --port 3030
```

### 5. Start the project
```bash
npm run dev
```

And that's all :)!

Note: The main branch is the branch where I made all the features I could in the given time for the test. But I continued improving the project (just because I wanted to) in the development branch. If you want to see the latest version of the project, you can switch to the development branch.