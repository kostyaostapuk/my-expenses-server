import { Request, Response } from 'express';

import OperationService from '../services/OperationService';

class OperationController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const operation = await OperationService.create(req.body);
            res.status(200).json(operation);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const operations = await OperationService.getAll();

            res.status(200).json(operations);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOperationById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const operation = await OperationService.getOperationById(id);
            res.status(200).json(operation);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const updatedPost = await OperationService.update(req.body);
            res.status(200).json(updatedPost);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const deletedOperation = await OperationService.delete(id);
            res.status(200).json(deletedOperation);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new OperationController();
