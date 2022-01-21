import prismaClient from "../prisma";

class UpdateWarningsService {
  async execute(
    id: number,
    title: string,
    content: string,
  ) {
    try {
      const warning = await prismaClient.warnings.update({
        where: {
          id: id
        },
        data: {
          title: title,
          content: content,
        }
      });
      return warning;
    } catch (err) {
      return err;
    }
  }
}

export default UpdateWarningsService;