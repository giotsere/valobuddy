const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    rank: {
      type: String,
      required: true,
      enum: [
        'Iron 1',
        'Iron 2',
        'Iron 2',
        'Silver 1',
        'Silver 2',
        'Silver 3',
        'Gold 1',
        'Gold 2',
        'Gold 3',
        'Platinum 1',
        'Platinum 2',
        'Platinum 3',
        'Diamond 1',
        'Diamond 2',
        'Diamond 3',
        'Ascendant 1',
        'Ascendant 2',
        'Ascendant 3',
        'Immortal 1',
        'Immortal 2',
        'Immortal 3',
        'Radiant',
      ],
    },
    region: {
      type: String,
      enum: [
        'NA',
        'EU',
        'TR',
        'MENA',
        'CIS',
        'KR',
        'JP',
        'OCE',
        'SEA',
        'LATAM',
        'BR',
      ],
      description: { type: String },
    },
    discord: { type: String },
    riot: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.virtual('url').get(function () {
  return '/users/' + this._id;
});

module.exports = mongoose.model('User', pserSchema);
