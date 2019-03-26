require("../db/mongoose");

const User = require("../models/user");

// User.findByIdAndUpdate("5c91350d223f19207020f599", { age: 1 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5c91350d223f19207020f599", 2)
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
