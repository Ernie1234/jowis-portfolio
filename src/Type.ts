export type TTeam = {
  username: string;
  _id: number;
  position: string;
  profileImage: string;
};

export interface IProject {
  title: string;
  description: string;
  img: {
    asset: {
      url: string;
    };
  };
  url: string;
  skills: string[];
  color: string;
}
export interface ITestimonials {
  title: string;
  client: string;
  clientInfo: string;
  img: {
    asset: {
      url: string;
    };
  };
}
export interface IGallery {
  title: string;
  picture: {
    asset: {
      url: string;
    };
  };
}
