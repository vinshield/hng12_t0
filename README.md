# Public API for HNG12 Task 0

This is a simple public API that returns basic information, including the registered email, current datetime, and the GitHub repository URL.

## Features

- Returns JSON-formatted response
- Provides the current datetime in ISO 8601 format (UTC)
- Supports CORS for cross-origin requests
- Deployed to a publicly accessible endpoint

## API Documentation

### **Endpoint**

### **Request Format**

To retrieve the API response, send a **GET request** to the endpoint.

#### **Example Using cURL**

````sh
curl -X GET https://your-deployment-url.com/

`GET /`

### **Response Format (200 OK)**

```json
{
	"email": "your-email@example.com",
	"current_datetime": "2025-01-30T09:30:00Z",
	"github_url": "https://github.com/yourusername/your-repo"
}
````

## Setup Instructions

### 1. Clone the Repository

`git clone https://github.com/vinshield/hng12_t0.git`
`cd hng12_t0`

### 2. Install dependencies

`npm install`

### 3. Run the Project Locally

`node index.js`

The server should start on `http://localhost:2000/`

## Technologies Used

- Node.js with Express
- CORS for cross-origin requests
- Git for version control

## Live API URL

## Reference

Click the link below to find and hire backend developers.
[Hire Nodejs developers](https://hng.tech/hire/nodejs-developers)
