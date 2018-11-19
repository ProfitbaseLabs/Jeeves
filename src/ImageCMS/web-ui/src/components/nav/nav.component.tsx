import * as React from 'react';
import { Treebeard } from 'react-treebeard';
import { PersonGroupNode } from 'src/domain/PersonGroupNode';
import { PersonGroupPersonNode } from 'src/domain/PersonGroupPersonNode';
import { withRouter } from 'react-router-dom'
import { HttpClient } from 'src/services/httpClient';
import { __await } from 'tslib';
import { PersonGroupEntity } from 'src/domain/personGroupEntity';

interface NavState {
    personGroups: PersonGroupNode[],
    cursor: any;
}

class Nav extends React.Component<any, NavState>{

    private _httpClient : HttpClient;
    constructor(props: any) {
        super(props)
        this.onToggle = this.onToggle.bind(this);
        this._httpClient = new HttpClient();
    }

    render() {

        const data = this.state.personGroups;

        return (
            <Treebeard
                data={data}
                onToggle={this.onToggle}
            />
        );
    }

    async onToggle(node, toggled) {
        if (this.state.cursor) {
            this.state.cursor.active = false;
        }

        node.active = true;
        if (node.children && node.children.length) {
            node.toggled = toggled;
        } else if (node instanceof PersonGroupNode) {
            node.children = await this.getPersons(node.id);
            node.toggled = toggled;
            this.props.history.push(`/personGroup/${node.id}`);
        } else if (node instanceof PersonGroupPersonNode) {
            this.props.history.push(`/personGroupPerson/${node.id}`);
        }

        this.setState({
            cursor: node
        });
    }

    async componentDidMount() {
        try{
            let personGroups = await this._httpClient.getPersonGroups();
            this.setState({
                personGroups: this.createPersonGroupNodes(personGroups)
            });
        }catch(e){
            console.error(e);
        }
        
    }

    componentWillMount() {
        this.setState({
            personGroups: []
        });
    }

    createPersonGroupNodes(personGroups : PersonGroupEntity[]): PersonGroupNode[] {
        return personGroups.map(f => new PersonGroupNode(f.id, f.name));        
    }

    async getPersons(personGroupId: string): Promise<PersonGroupPersonNode[]> {
        let persons = await this._httpClient.getPersons(personGroupId);
        return persons.map(f => new PersonGroupPersonNode(f.id, f.name));        
    }
}

export default withRouter(Nav) as typeof Nav;

