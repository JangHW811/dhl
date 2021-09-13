interface UserInfo {
  emailAddress: string;
  localApp: string;
  localAppAccessKey: string;
  clientIPAddress: string;
  userRole: string;
  appRole: string;
  password: string;
  username: string;
  enabled: boolean;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  authorities: {
    authority: string;
  }[];
}
