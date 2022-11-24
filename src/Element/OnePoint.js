import { Component, React } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

class OnePoint extends Component{
    constructor(){
        super()

    }
    componentDidMount(){

    }
    getValue(){
        var equation = document.getElementById("equation").value;
        var X = document.getElementById("X").value;
        do{
            var x=X
            var x0 = eval(equation)
            var error = (x0-x)/x0*100
            X=x0
        }while(error >= 0.000001 || error <= -0.0000001)
        var ans = x0
        console.log(ans);
        
        document.getElementById("showans").innerHTML=ans;
    }
    render(){
        return(
            <div>
                <br/>
                <h3>OnePoint</h3>
                <br/>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            input
                        </Form.Label>
                        <div>
                            <Form.Control id="equation" type="text" placeholder="X =" style={{width:"20%",margin: "0 auto"}}></Form.Control>
                            <Form.Control id="X" type="number" placeholder="x start at" style={{width:"20%",margin: "0 auto"}}></Form.Control>
                            
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
export default OnePoint