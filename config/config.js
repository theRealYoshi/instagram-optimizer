module.exports = {
  database: process.env.MONGO_URI || 'localhost',
  rabbit_url: process.env.CLOUDAMQP_URL || 'amqp://localhost',

};
