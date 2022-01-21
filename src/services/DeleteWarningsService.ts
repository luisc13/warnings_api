import prismaClient from "../prisma";

class DeleteWarningsService {
  async execute(id: number) {
    try {
      await prismaClient.warnings.delete({
        where: {
          id: id
        }
      });
      return "Warning deleted";
    } catch (err) {
      return err;
    }
  }
}
export default DeleteWarningsService;