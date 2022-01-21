import prismaClient from "../prisma";

class CreateUserService{
  async execute(
    type: string,
    username: string,
    password: string,
  ) {
    try {
      const user = await prismaClient.user.create({
        data: {
          type,
          username,
          password,
        },
      });

      return user;

    } catch (err) {
      return(err);
    }
  }
}

export default CreateUserService;