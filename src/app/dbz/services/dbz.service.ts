import { Injectable } from '@angular/core';
import { Chararter } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root'
})

export class DbzService {
    public characters: Chararter[] = [
        {
            id: uuid(),
            name: 'Krilin',
            power: 1000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 7500
        }
    ];

    addCharacter(character: Chararter): void {

        const newCharacter: Chararter = { id: uuid(), ...character}
       

        this.characters.push(newCharacter);
    }

    // onDeleteCharacter(index: number): void {
    deleteCharacterById(id: string) {
        // this.characters.splice(index, 1);
       this.characters = this.characters.filter( character => character.id !== id) 

    }

}