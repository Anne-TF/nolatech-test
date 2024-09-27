# Nolatech Technical Test

This is a test proejct for Nolatech. Down below you'll find the instructions to run the project.

# Intructions to run the project

### 1. Create a .env file, you can copy the .env.example file and rename it to .env.

### 2. Install the dependencies
```bash
npm install
```

### 3. Install json-server
```bash
npm install -g json-server
```

### 4. Start json-server
#### Note: Make sure to run this command in the root of the project. If you use a different port, make sure to change the port in the `.env` file, in the API_PORT variable.
```bash
json-server --watch db.json --port 3030
```

### 5. Start the project
```bash
npm run dev
```

### 6. If you want to run the tests, use the following command
```bash
npm run test
```

### One last thing! You must login with the following credentials:
- **Email**: jfdoe@nolatech.com
- **Password**: password

#### Any other email or password will result in an error notification.

And that's all :)!

**Note**: The main branch is the branch where I made all the features I could in the given time for the test. But I continued improving the project (just because I wanted to) in the development branch. If you want to see the latest version of the project, you can switch to the **development branch.**

# Project Structure

The project is structured following a clean/DDD/Hexagonal architecture. The project is divided into the following folders:

- **app**: Contains the app's assets, such as images, styles, and fonts.
- **common**: Contains the common components and utilities that are used by multiple modules throughout the project. Here you can find utils, common pages (Such as the Error Page), layouts, interfaces, custom hooks and general context providers.
- **modules**: Contains the different modules of the project. 
    - **auth**: Contains the authentication module. Here you can find the auth related pages, components, interfaces and routes.
    - **dashboard**: Contains the dashboard module. Here you can find the dashboard related pages, components, interfaces and routes.
    - **employees**: Contains the employees module. Here you can find the employees related pages, components, interfaces and routes.
    - **EvaluationForms**: Contains the evaluation forms module. Here you can find the evaluation forms related pages, components, interfaces and routes.

Each module is divided into the following folders:
- **presentation**: Contains the things that are exposed to the final client, like components, pages and the modules' routes.
- **infrastructure**: Contains the things that are related to the data layer, like API gateways, API routes for the module, and the data models (interfaces, enums).
- **domain**: Contains the things that are related to the business logic, like the use cases.