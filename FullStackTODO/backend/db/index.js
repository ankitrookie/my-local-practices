const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://ankitcoder93:Nd12rYbNSkGjuGem@cluster0.snn4i46.mongodb.net/todos');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
  todo
};
