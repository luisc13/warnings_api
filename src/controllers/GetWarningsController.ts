import { Request, Response } from "express";
import GetWarningsService from "../services/GetWarningsService";

class GetWarningsController {
  async handle(request: Request, response: Response){
    const service = new GetWarningsService();

    const result = await service.execute();

    return response.json(result);
  }
}

export default GetWarningsController;