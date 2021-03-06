import IController from "../IController";
import { Request, Response } from "express";
import { Connection } from "typeorm";
import Note from "../../../common/model/Note";
import NoteListController from "./NoteListController";

export default class NoteController implements IController{
    static readonly ENDPOINT = NoteListController.ENDPOINT + "/:id";
    readonly endpoint = NoteController.ENDPOINT;

    private connection : Connection;

    constructor(connection : Connection){
        this.connection = connection;
    }
    
    get = (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        this.connection.getRepository(Note).findOne(id)
            .then(note => res.send(note));
    }

    delete = (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        this.connection.getRepository(Note).delete(id)
            .then(() => res.send());
    }
}