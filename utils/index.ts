import axios from "axios";
import jwt_decode from "jwt-decode";
import { IUser } from "../types";

interface RUser {
  name: string;
  picture: string;
  sub: string;
}

export const createOrGetUser = async (response: any, addUser: any) => {
  const decoded: RUser = jwt_decode(response.credential);

  const { name, picture, sub } = decoded;

  const user: IUser = {
    _id: sub,
    _type: "user",
    userName: name,
    image: picture,
  };

  addUser(user);
  try {
    await axios.post(`http://localhost:3000/api/auth`, user);
  } catch (e) {
    console.error(e);
    await axios.post(`http://localhost:3000/api/auth`, user);
  }
};
