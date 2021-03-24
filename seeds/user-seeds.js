const { User } = require('../models');

const userData = [
  {
    username: "test1",
    email: "test1@gmail.com",
    password: "test"
  },
  {
    username: "test2",
    email: "test2@gmail.com",
    password: "test"
  },
  {
    username: "test3",
    email: "test3@gmail.com",
    password: "test"
  },
  {
    username: "test4",
    email: "test4@gmail.com",
    password: "test"
  },
  {
    username: "test5",
    email: "test5@gmail.com",
    password: "test"
  },
  {
    username: "test6",
    email: "test6@gmail.com",
    password: "test"
  },
  {
    username: "test7",
    email: "test7@gmail.com",
    password: "test"
  }
];

const seedUsers = () => User.bulkCreate(userData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;