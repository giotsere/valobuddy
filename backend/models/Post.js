const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    name: { type: String, required: true },
    userID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
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
    },
    microphone: { type: String, enum: ['Yes', 'No'] },
    roles: [
      {
        type: String,
        enum: ['Sentinel', 'Controller', 'Initiator', 'Duelist'],
      },
    ],
    description: { type: String, required: true },
    lookingFrom: {
      type: String,
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
    lookingTo: {
      type: String,
      enum: [
        'Iron 1',
        'Iron 2',
        'Iron 3',
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
    lookingRegion: {
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
    },
    discord: { type: String },
    riot: { type: String },
  },
  { timestamps: true }
);

PostSchema.set('toObject', { virtuals: true });
PostSchema.set('toJSON', { virtuals: true });

// PostSchema.virtual('url').get(function () {
//   return '/api/posts/' + this._id;
// });

module.exports = mongoose.model('Post', PostSchema);
