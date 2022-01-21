import { Request, Response } from "express";
import GetUserService from "../services/GetUserService";

class GetUserContoller {
  async handle(request: Request, response: Response){
    const { username, password } = request.body;
    const service = new GetUserService();

    const result = await service.execute(username, password);

    return response.json(result);
  }
}

export default GetUserContoller;