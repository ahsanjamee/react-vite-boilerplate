export type User = {
  id: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  postCode: string;
  address: string;
  authProvider: string;
  isEmailVerified: boolean;
  avatarURL?: string;
  firebaseSetting?: any;
  lastActive?: any;
  isDeleted?: boolean;
  isActive?: boolean;
  role: {
    id: string;
  };
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type ResetPasswordPayload = {
  phone: string;
};

export type ResetPasswordCodeVerify = {
  code: string;
  phone: string;
};
