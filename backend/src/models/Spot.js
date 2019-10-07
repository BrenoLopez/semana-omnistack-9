const {Schema, model} = require('mongoose');

const SpotSchema = new Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    use: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = model('Spot',SpotSchema);