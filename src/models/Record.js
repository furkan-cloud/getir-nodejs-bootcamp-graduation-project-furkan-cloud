const mongoose = require('mongoose');
const { Schema } = require('mongoose');

// Define RecordsSchema for defining shape of the documents in the collection
const RecordsSchema = new Schema(
  {
    key: {
      type: String,
    },
    value: {
      type: String,
    },
    createdAt: {
      type: Date,
    },
    counts: {
      type: [Number],
    },
  },
  { timestamps: true, versionKey: false }
);

// Convert RecordsSchema into a model to use our schema definition
const model = mongoose.model('record', RecordsSchema);

module.exports = model;
