import { Request, Response } from "express";
import DeleteWarningsService from "../services/DeleteWarningsService";

class DeleteWarningsController{
  async delete(req: Request, res: Response){
    const { id } = req.body;
    const deleteWarningsService = new DeleteWarningsService();
    const result = await deleteWarningsService.execute(id);
    return res.json(result);
  }
}

export default DeleteWarningsController;
