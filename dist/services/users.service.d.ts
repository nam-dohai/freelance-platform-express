import { CreateUserDto } from '../dtos/users.dto';
import { User } from '../interfaces/users.interface';
export declare class UserService {
    findAllUser(): Promise<User[]>;
    findUserById(userId: number): Promise<User>;
    createUser(userData: CreateUserDto): Promise<User>;
    updateUser(userId: number, userData: User): Promise<User>;
    deleteUser(userId: number): Promise<User>;
}
