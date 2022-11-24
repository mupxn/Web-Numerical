import { Component, React } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

class Secant extends Component{
    constructor(){
        super()

    }
    componentDidMount(){

    }
    getValue(){
        var equation1 = document.getElementById("equation1").value
        var X0 = document.getElementById("X0").value
        var X1 = document.getElementById("X1").value
        do{
            var x=X0
            var fx0 = eval(equation1)
            var x=X1
            var fx1 = eval(equation1)
            var dfx = (fx1-fx0)/(X1-X0)
            var x = X1 - (fx1/dfx)
            console.log(x)
            var error = (x-X1)/x*100
            X0=X1
            X1=x
        }while(error >= 0.000001 || error <= -0.0000001)
        var ans = x
        console.log(ans);
        
        document.getElementById("showans").innerHTML=ans;
    }
    render(){
        return(
            <div>
                <br/>
                <h3>Secant</h3>
                <br/>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            input
                        </Form.Label>
                        <div>
                            <Form.Control id="equation1" type="text" placeholder="f(x)" style={{width:"20%",margin: "0 auto"}}></Form.Control>
                           
                            <Form.Control id="X0" type="number" placeholder="x0" style={{width:"20%",margin: "0 auto"}}></Form.Control>
                            <Form.Control id="X1" type="number" placeholder="x1" style={{width:"20%",margin: "0 auto"}}></Form.Control>
                            
                        </div>
                        <Button onClick={this.getValue} variant="danger">
                            summit
                        </Button>
                    </Form.Group>
                </Form>
                <br/>
                <div id="showans"></div>
                
            </div>
        );
    }
}
export default Secant