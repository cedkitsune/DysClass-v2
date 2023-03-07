import { matiere } from "./matiere.model";

export interface exercice{
id?:string;
title?:string;
matiere?:matiere;
consigne?:string;
content?:string;
answer1?:string;
answer2?:string;
answer3?:string;
answer4?:string;
answer5?:string;
}