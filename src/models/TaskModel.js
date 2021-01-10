import { observable } from "mobx";
import uniqueid from 'uniqueid';

export default class TaskModel {
    id = uniqueid();
    @observable name;
    @observable completed = false;

    constructor(name){
        this.name = name;
    }
}