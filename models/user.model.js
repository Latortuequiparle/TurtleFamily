const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

/*On creer le "schema" d'un profil : 
 - un pseudo
 - un email
 - un Mot de passe
 - une image de profil
 - une biographie / Presentation de soit
 - les personnes qui le suive
 - les personnes qu'il suit
 - les post qu'il a aimé
*/

const userSchema = new mongoose.Schema(
    {
        pseudo: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 15,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            maxLength: 1024, //Puisque il va etre crypter, on ne prends pas de risque.
            minLength: 6
        },
        picture: {
            type: String,
            default: './uploads/profil/random-user.png'
        },
        bio: {
            type: String,
            max: 1024
        },
        followers: {
            type: [String]
        },
        following: {
            type: [String]
        },
        likes: {
            type: [String]
        }
    },
    {
        timestamps: true,
    }
);

// crypt le mdp avant de l'envoyer a la base de donnee

userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


//Creation du "model" d'un profil
const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;