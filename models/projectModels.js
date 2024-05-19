const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectSchema = new Schema({
  name: String, 
  description: String, 
  tags: [String],
  photos: [String], 
  role: String,
  company: String,
  featuredPhoto: String,
}, {timestamps: true})

module.exports = mongoose.model('Project', ProjectSchema)