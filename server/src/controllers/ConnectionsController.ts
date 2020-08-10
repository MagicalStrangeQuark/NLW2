import { Request, Response, json } from 'express';
import db from '../database/connection';

export default class ConnectionsController {
    async index(request: Request, response: Response) {
        const totalConnections = await db('connections').count('* as total');

        const { total } = totalConnections[0];

        return response.json({
            total: total
        });
    }

    async create(request: Request, response: Response) {
        const { user_id } = request.body;

        console.log(user_id);

        await db('connections').insert({
            user_id: user_id
        });

        return response.status(201).json({ status: true });
    }
}