require("../db/mongoose");
const Task = require("../models/task");

// Task.findByIdAndDelete("5c912fdb62b969253ce30d7e")
//   .then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id, completed) => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed });
  return count;
};

deleteTaskAndCount("5c9132585b90463958080b51", false)
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
