import Router from 'express';
import OperationController from './mongoose/controllers/OperationController';

const router = Router();

router.post('/operations', OperationController.create);
router.get('/operations', OperationController.getAll);
router.get('/operations/:id', OperationController.getOperationById);
router.put('/operations', OperationController.update);
router.delete('/operations/:id', OperationController.delete);

export default router;
