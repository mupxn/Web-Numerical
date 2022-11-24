import { Component, React } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

class FalsePosition extends Component{
    constructor(){
        super()

    }
    componentDidMount(){

    }
    getValue(){
        var equation = document.getElementById("equation").value;
        var XL = document.getElementById("XL").value;
        var XR = document.getElementById("XR").value;
        var xl = XL
        var xr = XR
        do{
            var x=xr
            var fxr = eval(equation)
            var x=xl
            var fxl = eval(equation)
            var x1 = (xl*fxr - xr*fxl)/(fxr-fxl)
            var x=x1
            var fx1 = eval(equation)
            
            if(fx1*fxr<0){
                var error=(x1-xl)/x1*100
                xl=x1
            }
            else{
                var error=(x1-xr)/x1*100
                xr=x1
            }
        }while(error >= 0.000001 || error <= -0.0000001)
        var ans = x1
        //console.log(fxm);
        console.log(ans);
        
        document.getElementById("showans").innerHTML=ans;

    }
    render(){
        return(
            <div>
                <br/>
                <h3>FalsePosition</h3>
                <br/>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            input
                        </Form.Label>
                        <div>
                            <Form.Control id="equation" type="text" placeholder="Equation" style={{width:"20%",margin: "0 auto"}}></Form.Control>
                            <Form.Control id="XL" type="number" placeholder="XL" style={{width:"20%",margin: "0 auto"}}></Form.Control>
                            <Form.Control id="XR" type="number" placeholder="XR" style={{width:"20%",margin: "0 auto"}}></Form.Control>
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
export default FalsePosition