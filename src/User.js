import React from "react"
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count1: 1
        }
        console.log("constructor render")
    }
    componentDidMount() {
        console.log("child component Didmount")
    }
    render() {
        let { name } = this.props;
        let { count, count1 } = this.state
        return (
            <>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>count</button>
                <h1>Name: {name}</h1>
                <h1> count:{count}</h1>

            </>

        )
    }
};
export default User