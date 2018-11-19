require('es6-promise').polyfill();
require('isomorphic-fetch');

import { PersonGroupEntity } from 'src/domain/personGroupEntity';
import { PersonEntity } from 'src/domain/personEntity';

export class HttpClient {
    public async getPersonGroups(): Promise<PersonGroupEntity[]> {
        return new Promise<PersonGroupEntity[]>(resolve => {
            const groups = [
                {
                    id: 'Group_Ansatte',
                    name: 'Ansatte'
                }
            ];
            process.nextTick(() => {
                resolve(groups)
            });
        });
    }

    public async getPersonGroup(personGroupId): Promise<PersonGroupEntity> {
        return new Promise<PersonGroupEntity>(resolve => {
            const group = {
                id: 'Group_Ansatte',
                name: 'Ansatte'
            };
            setTimeout(() => {
                resolve(group);
            }, 0);

        });
    }

    public async getPersons(personGroupId: string): Promise<PersonEntity[]> {
        return new Promise<PersonEntity[]>(resolve => {
            const persons = [
                {
                    id: 'Person_1',
                    name: 'Darth Vader'
                },
                {
                    id: 'Person_2',
                    name: 'Luke Skywalker'
                }
            ];

            resolve(persons);
        });
    }

    public async createPerson(personGroupId: string, name: string): Promise<PersonEntity> {
        return new Promise<PersonEntity>(resolve => {
            const person = {
                id: 'Person_2',
                name: 'Luke Skywalker'
            };

            resolve(person);
        });
    }
}