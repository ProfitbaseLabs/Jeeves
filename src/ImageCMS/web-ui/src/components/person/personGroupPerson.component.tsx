import * as React from 'react'
import { PersonEntity } from 'src/domain/personEntity';
import { FaceEntity } from 'src/domain/faceEntity';

interface PersonGroupPersonState {
    person: PersonEntity;
    faces: FaceEntity[];
}

export class PersonGroupPerson extends React.Component<any, PersonGroupPersonState>{
    constructor(props: any) {
        super(props);
    }

    render() {

        const tableRows = this.state.faces ? this.state.faces.map(c => <tr key={c.id}>
            <td><a onClick={this.deleteFace.bind(this, c)}>Delete</a></td>
            <td>{c.id}</td>
            <td>{c.name}</td>
            <td><img width='200px' height='200px' src={c.url}/></td>
        </tr>) : null;

        return (
            <div>
                <p>
                    {this.state.person.name}
                </p>
                <div>
                    Faces
                    <button>Add Face</button>
                </div>                
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Image Name</th>
                                <th>Url</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRows}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    componentDidMount() {
        const personId = this.props.match.params.id;
        this.setState({
            person: this.getPerson(personId),
            faces: this.getFaces(personId)
        });
    }

    componentWillMount() {
        this.setState({
            person : {
                id : 'id',
                name : 'Not Set'
            },
            faces : []
        });
    }

    deleteFace(face : FaceEntity) : void{
        // API call
        alert('Deleting face...');
    }

    getPerson(personId: string): PersonEntity {
        // API call
        return {
            id: personId,
            name: 'Darth Vader'
        };
    }

    getFaces(personId: string): FaceEntity[] {
        return [
            {
                id: 'img_123',
                name: 'Darth 1',
                url: 'https://boygeniusreport.files.wordpress.com/2015/08/darth-vader.jpg?quality=98&strip=all&w=782'
            }
        ]
    }
}