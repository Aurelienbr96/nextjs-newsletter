export namespace UserDomainModel {
  export type UserModel = {
    id: string;
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    subscriptions: Array<string>;
  };

  export const nullUser: UserModel = {
    id: "",
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    subscriptions: [],
  };
}
