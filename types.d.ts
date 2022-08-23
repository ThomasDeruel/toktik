export interface Video {
    _id: string;
  userId: string;
  caption: string;
  likes:{
    _key: string;
    _ref: string;
    type: string;
  }[],
  postedBy: {
    _id:string;
    userName:string;
    image:string;
  },
  comments: {
    comment: string;
    _key: string;
    postedBy: {
      _id: string;
      image: string;
      userName: string;
    };
  }[];
  video: {
    asset: {
      _id: string;
      url: string;
    };
  };
}

export interface IUser {
    _id: string;
    _type: string;
    userName: string;
    image: string;
  }
