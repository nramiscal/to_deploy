// - - - - = = = = Model = = = = - - - -
const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection('mongodb://localhost/blackbelt');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
mongoose.Promise = global.Promise;

autoIncrement.initialize(connection);

const { Schema } = mongoose;
const petSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Name is required'],
    minlength: [3, 'Name length must be greater than 3'],
    unique: true
  },
  qty: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [0, 'Quantity must be at least 0']
  },
  price: {
    type: Currency,
    trim: true,
    required: [true, 'Price is required'],
    min: [0, 'Price must be at least 0']
  }
}, {
  timestamps: true
});


petSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
petSchema.plugin(autoIncrement.plugin, 'Table');
var Table = connection.model('Table', petSchema);
// const Table = mongoose.model('Table', petSchema);
