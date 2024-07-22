import mongoose from 'mongoose';

export const connectToDB = async (): Promise<void> => {
  if (mongoose.connections[0].readyState) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: 'sight-boost',
      useNewUrlParser: true,
    } as mongoose.ConnectOptions);

    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};
