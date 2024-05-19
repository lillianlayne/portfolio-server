const express = require('express')
const ProjectModel = require('../models/projectModels')

const createProject = async (req, res) => {
  try {
    res.json(await ProjectModel.create(req.body))
  } catch (error) {
    res.status(400).json(error)
  }
}
const showProject = async (req, res) => {
  try {
    res.json(await ProjectModel.findById(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
}

const showAll = async (req, res) => {
  try {
    res.json(await ProjectModel.find({}))
  } catch (error) {
    res.status(400).json(error)

  }
}

const updateProject = async (req, res) => {
  try {
    console.log('request:', req.params);
    console.log('body:', req.body);

    res.json(await ProjectModel.findByIdAndUpdate(req.params.id, req.body, {new: true}))
  } catch (error) {
    res.status(400).json(error)
  }
}

const deleteProject = async (req, res) => {
  try {
    res.json(await ProjectModel.findByIdAndDelete(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
}


module.exports = {
  create: createProject, 
  show: showProject, 
  update: updateProject, 
  delete: deleteProject, 
  showAll
}