import { Request, Response } from "express";
import prismaClient from "../prisma";
import CreateUserService from "../services/CreateUserService";

class CreateUserController{
  async handle(request: Request, response: Response){
    const { type, username, password } = request.body;
    const alreadyExists = await prismaClient.user.findFirst({
      where: {
        username: username,
      }
    });
    
    if(!alreadyExists){
      const createUser = new CreateUserService();
      const user = await createUser.execute(type, username, password);
      return response.json(user);
    } else {
      return response.status(400).json({
        error: "User already exists"
    });
    }
  }
}

export default CreateUserController;
