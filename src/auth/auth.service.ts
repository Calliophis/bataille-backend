import { Injectable } from '@nestjs/common';
import { Request } from "express";

@Injectable()
export class AuthService {

    verifyToken(request: Request) {
        const token = request.headers.authorization;
        if (token === 'MySecret2024!') {
            return true;
        } else {
            throw new Error('Incorrect token');
        }
    }
}
