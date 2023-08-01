import { Request, Response } from "express";
import { deleteRequest } from "../../utils/deleteRequest";

export function deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    deleteRequest({
        id: [ +id ],
        res: res,
        type: "user"
    });
}