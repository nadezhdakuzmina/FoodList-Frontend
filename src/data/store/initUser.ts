import { checkAuth } from "@data/resourses/user/checkAuth";

export const initUser = async (): Promise<string> => {
  const token = await checkAuth().catch(() => null);
  return token;
};
