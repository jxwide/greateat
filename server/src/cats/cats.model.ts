import {Column, DataType, Model, Table} from "sequelize-typescript";

interface CatsCreationAttrs {
    name: string;
}

@Table({tableName: 'cats'})
export class Cats extends Model<Cats, CatsCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;
}