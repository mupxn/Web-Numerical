import {React,Component} from "react"
const Windowstyle ={
    width:"30%",
    height:"30vh",
    border:"1px solid black",
    borderRadius:"5px",
    margin:"0 0 0 65vw",
    position:"fixed",
};
class Windows extends Component{
    constructor(){

    }
    componentDidMount(){

    }
    render(){
        console.log("render called");
        return(
            <div style={Windowstyle}>
                This is Windows
            </div>
        );
    }
}
export default Windows;