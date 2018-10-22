import * as React from 'react'
import { PersonEntity } from '../../domain/personEntity';

interface PersonGroupState {
    persons: PersonEntity[];
}

export class PersonGroup extends React.Component<any, PersonGroupState>{

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                Person group!
            </div>
        );
    }

    componentDidMount() {        
        const groupId = this.props.match.params.id;
        this.setState({
            persons: [
                {
                    id: 'person_124',
                    name: 'Person 1'
                }, {
                    id: 'person_125',
                    name: 'Person 2'
                }
            ]
        });
    }
}