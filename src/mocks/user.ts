import { UserDomainModel } from "@/type/user-model.domain";

const BASE_USER = {
  id: "507f1f77bcf86cd799439011",
  firstName: "Jamie",
  lastName: "Doe",
  gender: "M",
  email: "jamie.doe@example.com",
};

export const USER_WITH_ONE_SUBSCRIPTION = {
  ...BASE_USER,
  id: "507f1f77bcf86cd799439012",
  firstName: "Jamie One subcription",
  subscriptions: ["RIGHT_1"],
};

export const USER_WITHOUT_SUBSCRIPTION = {
  ...BASE_USER,
  id: "507f1f77bcf86cd799439013",
  firstName: "Jamie Without subcription",
  subscriptions: [],
};

export const USER_WITH_MULTIPLE_SUBSCRIPTION = {
  ...BASE_USER,
  id: "507f1f77bcf86cd799439014",
  firstName: "Jamie Multiple subcription",
  subscriptions: ["RIGHT_1", "RIGHT_2"],
};

export const ALL_USERS: Array<UserDomainModel.UserModel> = [
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
  USER_WITH_ONE_SUBSCRIPTION,
];
