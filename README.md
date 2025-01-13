# Online-Code-Editor

# Online Code Runner API

This is an Express-based API that allows users to run code snippets written in Python and Java. The server executes the submitted code and returns the output to the client.

## Features

- Supports Python and Java code execution.
- Temporary files are created for execution and automatically cleaned up after execution.
- Handles errors gracefully and provides informative error messages.
- Frontend integration with EJS templates.

## Requirements

- Node.js (v14 or higher recommended)
- Python (if running Python code)
- Java Development Kit (JDK) (if running Java code)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Ensure Python and JDK are installed on your machine. Add them to your system's PATH if not already done.

4. Start the server:

   ```bash
   node index.js
   ```

5. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

## API Endpoints

### `GET /`

Serves the frontend page for the code editor and output display.

### `POST /run`

Executes the provided code based on the specified language and returns the output.

#### Request Body

- `language`: The programming language (`python` or `java`).
- `code`: The code snippet to execute.

#### Example

```json
{
  "language": "python",
  "code": "print(\"Hello, World!\")"
}
```

#### Response

- `output`: The output of the executed code.

#### Example Response

```json
{
  "output": "Hello, World!\n"
}
```

## File Management

- Temporary files are created in the project directory for execution (`temp.py` for Python and `Temp1.java` for Java).
- Temporary files are automatically deleted after the execution.

## Project Structure

```plaintext
project-directory/
├── views/
│   └── index.ejs     # Frontend template
├── index.js          # Main server file
├── package.json      # Project dependencies
├── README.md         # Project documentation
```

## Notes

- Ensure that the Python and Java compilers are installed and accessible in the command line.
- For Java code execution, the class name should match `Temp1` (as per the current implementation).
- Handle user-provided code carefully to avoid potential security risks.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contribution

Feel free to submit issues and pull requests for improvements or feature suggestions.
