import { Request, Response } from "express";
import UpdateWarningsService from "../services/UpdateWarningsService";

class UpdateWarningsController{
  async handle (request: Request, response: Response){
    const { id, title, content } = request.body;
    const updateWarnings = new UpdateWarningsService();
    const warning = await updateWarnings.execute(id, title, content);
    return response.json(warning);
  }
}

export default UpdateWarningsController;