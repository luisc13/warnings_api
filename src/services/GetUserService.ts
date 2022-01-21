import prismaClient from "../prisma";

class GetUserService {
  async execute(
    username: string,
    password: string,
  ) {
    try {
      const user = await prismaClient.user.findFirst({
        where: {
          username: username,
          password: password,
        }
      });
      return user;
    } catch (err) {
      return err;
    }
  }
}

export default GetUserService;