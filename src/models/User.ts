import { Schema, model, Model } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface IUser {
  name: string;
  email: string;
  password: string;
  role: string;
  avt_path?: string;
}

interface IUserMethods {
  createJWT(): string;
  comparePassword(candidate: string): Promise<boolean>;
}

type UserModel = Model<IUser, {}, IUserMethods>;

const schema = new Schema<IUser, UserModel, IUserMethods>({
  name: {
    type: String,
    required: [true, 'and i said hey'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'what is going on'],
    validate: [validator.isEmail, 'and i try'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'oh my god, do i try'],
    minlength: 8,
    maxlength: 25,
    select: false,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
    required: true,
  },
  avt_path: { type: String, required: false },
});

schema.pre('save', async function () {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

schema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, 'secret', {
    expiresIn: '1d',
  });
};

schema.methods.comparePassword = function comparePassword(candidate) {
  return bcrypt.compare(candidate, this.password);
};

const User = model<IUser, UserModel>('User', schema);

export default User;
export { IUser };
