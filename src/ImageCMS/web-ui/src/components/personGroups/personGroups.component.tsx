import * as React from 'react';
import { PersonGroupEntity } from '../../domain/personGroupEntity';
import { withRouter} from 'react-router-dom';

interface PersonGroupsState{
    personGroups : PersonGroupEntity[];
}

export class PersonGroups extends React.Component<any,PersonGroupsState>{
    
    constructor(props : any){
        super(props);

        this.state = {
            personGroups : [{
                id : 'id_124',
                name : 'Ansatte'
            },
            {
                id : 'id_125',
                name : 'Gjester'
            }]
        };
    }

    public render(){
        const listItems = this.state.personGroups.map(group => <li onClick={this.groupClicked.bind(this, group)} key={group.id}>{group.name}</li>);
        return(
                <ul>
                    {listItems}
                </ul>
            );
    }
    
    private groupClicked(group : PersonGroupEntity){
        this.props.history.push(`/personGroup/${group.id}`);        
    }
}

export default withRouter(PersonGroups)