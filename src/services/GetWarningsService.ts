import prismaClient from "../prisma";

class GetWarningsService {
  async execute() {
    try {
      const warnings = await prismaClient.warnings.findMany({
        orderBy: {
          createdAt: "desc"
        }
      });
      return warnings;
    } catch (err) {
      return err;
    }
  }
}

export default GetWarningsService;