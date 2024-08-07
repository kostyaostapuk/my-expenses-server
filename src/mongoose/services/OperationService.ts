import OperationModel, { Operation } from '../schemes/Operation';
import { HydratedDocument } from 'mongoose';

class OperationService {
    async create(operation: HydratedDocument<Operation>) {
        const createdOperation = await OperationModel.create(operation);
        return createdOperation;
    }

    async getAll() {
        const foundedOperations = await OperationModel.find();
        return foundedOperations;
    }

    async getOperationById(id: string) {
        if (!id) {
            throw new Error('Id not found');
        }

        const foundedOperation = await OperationModel.findById(id);
        return foundedOperation;
    }

    async update(operation: HydratedDocument<Operation>) {
        if (!operation._id) {
            throw new Error('Id not found');
        }

        const updatedOperation = await OperationModel.findByIdAndUpdate(
            operation._id,
            operation,
            { new: true }
        );
        return updatedOperation;
    }

    async delete(id: string) {
        if (!id) {
            throw new Error('Id not found');
        }

        const deletedOperation = await OperationModel.findByIdAndDelete(id);
        return deletedOperation;
    }
}

export default new OperationService();
