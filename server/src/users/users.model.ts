import {Column, DataType, Model, Table} from "sequelize-typescript";

interface UsersCreationAttrs {
    email: string;
    password: string;
    name: string;
}

@Table({tableName: 'users'})
export class Users extends Model<Users, UsersCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @Column({type: DataType.STRING, allowNull: true, defaultValue: 'Гость'})
    name: string;
}