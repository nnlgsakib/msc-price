import express, { Request, Response } from 'express';
import axios from 'axios';
import cors from 'cors'; // Import cors middleware
import { PRICE_API } from './api';

const app = express();
const PORT = 3000;

// Enable CORS for all origins
app.use(cors());

// Define a route to fetch and return the price
app.get('/price', async (req: Request, res: Response) => {
  try {
    const response = await axios.get(PRICE_API);
    const price = response.data.data.new_price;
    const change = response.data.data.change;
    res.json({ price, change });
  } catch (error) {
    console.error('Error fetching price:', error);
    res.status(500).json({ error: 'Failed to fetch price' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
