import prismaClient from "../prisma";

class CreateWarningsService{
  async execute(
    title: string,
    content: string,
    userId: number
  ){
    try {
      const warning = await prismaClient.warnings.create({
        data: {
          title,
          content,
          userId
        }
      })
      return warning;
    } catch (err) {
      return(err)
    }
  }
}

export default CreateWarningsService;