import * as React from 'react'
import { PersonEntity } from '../../domain/personEntity';
import { HttpClient } from 'src/services/httpClient';
import { PersonGroupEntity } from 'src/domain/personGroupEntity';

interface PersonGroupState {
    group : PersonGroupEntity;
    persons: PersonEntity[];
}

export class PersonGroup extends React.Component<any, PersonGroupState>{

    private _httpClient : HttpClient;

    constructor(props: any) {
        super(props);
        this._httpClient = new HttpClient();
    }

    public render() {
        const personsList = (this.state.persons !== void 0) ? this.state
            .persons
            .map(f => <tr key={f.id}>
                <td>
                    <a onClick={this.personClicked.bind(this, f)}>{f.name}</a>
                </td>
                <td>
                    ..person info
            </td>
            </tr>) : null;

        return (
            <div>
                <div>
                    <button onClick={this.addPerson.bind(this)}>Add Person</button>
                </div>
                Persons
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>More Info...</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personsList}
                    </tbody>
                </table>
            </div>
        );
    }

    
    componentWillMount() {
        this.setState({});
    }

    async componentDidMount() {
        const groupId = this.props.match.params.id;
        let personGroup : PersonGroupEntity = {id : '', name : ''};
        let persons : PersonEntity[] = [];
        try{
            personGroup = await this._httpClient.getPersonGroup(groupId);
            persons = await this._httpClient.getPersons(groupId);
        }catch(e){

        }
        
        const p = this.getPersons(groupId);
        this.setState({
            persons: persons,
            group : personGroup
        });
    }

    addPerson(){
        
    }

    personClicked(person: PersonEntity) {
        this.props.history.push(`/personGroupPerson/${person.id}`);
    }

    getPersons(groupId: string): PersonEntity[] {
        /** API Call to get persons */
        return [
            {
                id: 'person_124',
                name: 'Person 1'
            }, {
                id: 'person_125',
                name: 'Person 2'
            }
        ];
    }
}