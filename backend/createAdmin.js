const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./model/UserSchema');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const newAdmin = new User({
      name: 'admin',
      email: 'admin@gmail.com',
      password: 'admin',  // You should hash the password in production!
      role: 'admin',
      trainerName: 'Mugilvannan P',
      institution: {
        name: 'FIIT FORMACION PVT LTD',
        address: 'Chennai - 600056'
      }
      // ❌ courses removed – now handled in separate CourseSchema
    });

    await newAdmin.save();
    console.log('Admin created successfully!');
    mongoose.disconnect();
  })
  .catch(err => console.error('DB connection failed', err));
