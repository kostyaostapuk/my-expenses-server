import { Schema, Model, model } from 'mongoose';

enum Operations {
    Expense = 'Expense',
    Income = 'Income',
}

type OperationType = Operations.Expense | Operations.Income;

export interface Operation {
    type: OperationType;
    comment: string;
    amount: number;
    date: string;
}

export type OperationModelType = Model<Operation>;

const OperationSchema = new Schema<Operation, OperationModelType>({
    type: { type: String, required: true, enum: Operations },
    comment: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: String, required: true },
});

const OperationModel = model<Operation, OperationModelType>(
    'Operation',
    OperationSchema
);

export default OperationModel;
