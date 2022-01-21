import { Request, Response } from "express";
import prismaClient from "../prisma";
import CreateWarningsService from "../services/CreateWarningsService";

class CreateWarningsController{
  async handle(request: Request, response: Response){
    const { title, content, userId } = request.body;
    const alreadyExists = await prismaClient.warnings.findFirst({
      where: {
        title: title,
        content: content,
      }
    });

    if(alreadyExists){
      return response.status(400).json({
        error: "An warning with this title and content already exists"
    });
    } else {
    const createWarnings = new CreateWarningsService();
    const warning = await createWarnings.execute(title, content, userId);
    return response.json(warning);
    }
  }
  
}

export default CreateWarningsController;