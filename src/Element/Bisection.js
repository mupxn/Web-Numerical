import { Component, React } from "react";
import { Button, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Windows from "./window";

var ans='';
class Bisection extends Component{
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
            var xm = (Number(xl)+Number(xr))/2
            var x=xm
            var fxm = eval(equation)
            var x=xr
            var fxr = eval(equation)
            if(fxm*fxr<0){
                var error=(xm-xl)/xm*100
                xl=xm
            }
            else{
                var error=(xm-xr)/xm*100
                xr=xm
            }
        }while(error >= 0.000001 || error <= -0.0000001)
        var ans = xm
        //console.log(fxm);
        console.log(ans);
        document.getElementById("showans").innerHTML=ans;
    }
    render(){
        return(
            <Container>
                <br/>
                <h3>Bisection</h3>
                <br/>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            input
                        </Form.Label>
                        <div>
                            <Form.Control id="equation" type="text" placeholder="Equation" style={{width:"20%",margin: "0 auto"}}></Form.Control>                        
                            <Form.Control id="XL" type="number" placeholder="XL" style={{width:"20%" ,margin: "0 auto"} }></Form.Control>
                            <Form.Control id="XR" type="number" placeholder="XR" style={{width:"20%" ,margin: "0 auto"} }></Form.Control>
                            
                        </div>
                        <Button onClick={this.getValue} variant="danger">
                            summit
                        </Button>
                    </Form.Group>
                </Form>
                <br/>
                <div id="showans"></div>
            </Container>
        );
    }

}
export default Bisection