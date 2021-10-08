import * as React from "react";
import { getTasks } from "./habiticaAPI"

const username = "ebbdcbab-e0dc-404b-aa50-9824f0678adf"
const credentials = "bed67d72-63cc-479c-88d3-8845569b04f8"

class App extends React.Component<any,any> {
    constructor(props: any) {
        super(props)
        this.state = {
            isLoaded: false,
            tasks: ""
        }
    }
    componentDidMount() {
        getTasks(username, credentials)
            .then(res => res.json())
            .then(
                result => {
                    console.log(result.data)
                    this.setState({
                        isLoaded: true,
                        tasks: result.data
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )

    }
    render(){
        const { error, isLoaded, tasks } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            const listItems = tasks.map((tasks: any) =>
                <li>{tasks.text}</li>
            );
            return (
                <ul>{listItems}</ul>
            );
        }
    }
}
export default App