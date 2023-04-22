import { TokenData } from '../interfaces/auth.interface';
import { User } from '../interfaces/users.interface';
export declare class AuthService {
    signup(userData: User): Promise<User>;
    login(userData: User): Promise<{
        cookie: string;
        findUser: User;
        tokenData: TokenData;
    }>;
    logout(userData: User): Promise<User>;
}
