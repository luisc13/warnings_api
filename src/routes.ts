import {Router} from 'express';
import CreateUserController from './controllers/CreateUserController'
import CreateWarningsController from './controllers/CreateWarningsController';
import GetUserContoller from './controllers/GetUserContoller';
import GetWarningsController from './controllers/GetWarningsController';
import UpdateWarningsController from './controllers/UpdateWarningsController';
import DeleteWarningsController from './controllers/DeleteWarningsController';

const router = Router();

router.post("/create/user", new CreateUserController().handle);
router.post("/create/warnings", new CreateWarningsController().handle);
router.post("/login", new GetUserContoller().handle);
router.get("/warnings", new GetWarningsController().handle);
router.put("/update/warnings", new UpdateWarningsController().handle);
router.post("/delete/warnings", new DeleteWarningsController().delete);

export default router;