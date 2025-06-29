import express from 'express';
import cors from 'cors';
import { AppDataSource } from './config/database';
import { config } from './config/config';
import userRoutes from './routes/userRoutes';

const app = express();

// Middleware
app.use(cors(config.cors));
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Initialize database connection and start server
AppDataSource.initialize()
  .then(() => {
    console.log('Database connection established');
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  })
  .catch((error) => {
    console.error('Error during Data Source initialization:', error);
  }); 