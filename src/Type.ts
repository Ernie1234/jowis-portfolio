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
