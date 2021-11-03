const mongoose = require('mongoose');

mongoose
  .connect(
    `${process.env.PROTOCOL}://${process.env.URL}:${process.env.DB_PORT}/${process.env.DATABASE_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Database Connected'))
  .catch((error) =>
    console.error(`Database connection error: ${error}`)
  );
