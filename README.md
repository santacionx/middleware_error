# Express Middleware and Error Handling Guide

This guide outlines the middleware functions and error handling techniques used in an Express application.

## Middleware Functions

### Method Override

- **Purpose:** Allows support for HTTP methods like PUT, DELETE, and UPDATE in forms where the client doesn't support it.
- **Usage:** `method-override`

### Body Parser

- **Purpose:** Parses incoming request bodies to make them accessible via `req.body`.
- **Usage:** `body-parser`

### Express Static

- **Purpose:** Serves static files such as HTML, CSS, and JavaScript.
- **Usage:** `express.static`

### Express URL Encoded

- **Purpose:** Parses incoming requests with URL-encoded payloads.
- **Usage:** `express.urlencoded({ extended: true })`

### Async Wrapper

- **Purpose:** Handles asynchronous functions by wrapping them to catch errors and pass them to the error handler.
- **Usage:** 
  ```javascript
  function asyncWrap(fn) {
    return function (req, res, next) {
      fn(req, res, next).catch(next);
    };
  }```

  ## Error Handling

### Custom Error Handling

- **Purpose:** 
```Provides tailored error handling for different scenarios, specifying particular status codes and messages.```
- **Usage:**
  - **MongoDB:** 
  
  ```Create individual functions for handling status codes; utilize them as required.```
  - **Async Functions:** 
  ```Implement `try...catch` blocks or use `asyncWrap()` to capture errors.```
  - **AsyncWrap():** 
  ```Wrap asynchronous functions to uniformly manage errors.```

### Global Error Handler

- **Purpose:** 
```Centralizes error handling for the entire application.```
- **Usage:**
  ```javascript
  ```app.use((err, req, res, next) => {
    let { status = 500, message = 'Some error' } = err;
    res.status(status).send(message);
  });```
