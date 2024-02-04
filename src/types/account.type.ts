export type LoginData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type SginUpStep1 = {
  email: string;
  password: string;
};
export type SginUpStep2 = {
  name: string;
  phone: string;
  birthday: string;
  address: {
    zipcode: number | null;
    detail: string;
  };
};
