
const express = require ('express')
const cors = require('cors');
const axios = require('axios');
const app = express()
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors());

// Define a route to handle registration
app.post('/register', async (req, res) => {
  try {
    // Extract user data from the request body
    const { email, name, password, phoneNumber, city } = req.body;

    // Validate user data (you can add your validation logic here)

    // Make a POST request to the API endpoint
    const response = await axios.post('http://localhost:8080/api/register', {
      email,
      name,
      password,
      phoneNumber,
      city
    });

    // Forward the response from the API to the client
    res.json(response.data);
  } catch (error) {
    // Handle errors
    console.error('Error calling API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/authenticate', async (req, res) => {
    try {
      // Extract user data from the request body
      const { email, password } = req.body;
  
      // Validate user data (you can add your validation logic here)
  
      // Make a POST request to the login API endpoint
      const response = await axios.post('http://localhost:8080/api/authenticate', {
        email,
        password,
      });

      res.json(response.data)
      // Forward the response from the API to the client
      console.log('Successfully autheticated')
    } catch (error) {
      // Handle errors
      console.error('Error calling API:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });