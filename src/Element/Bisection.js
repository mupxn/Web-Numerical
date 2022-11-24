import { Component, React } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import * as ReactDOM from "react-dom";
import ApexChart from "./ApexChart";


var Xm = [];
var Xl = [];
var Xr = [];
var Xloop = [];

class Bisection extends Component{
    constructor(){
        super();
    }
    componentDidMount(){

    }
    getValue(){
        const showchart = ReactDOM.createRoot(document.getElementById("showchart"));
        var equation = document.getElementById("equation").value;
        var xl = document.getElementById("XL").value;
        var xr = document.getElementById("XR").value;
        var i=0;
        do{
            Xr.push(xr);
            Xl.push(xl);
            Xloop.push(i++);
            var xm = (Number(xl)+Number(xr))/2
            Xm.push(xm);
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
        showchart.render(
            <div>
              <ApexChart data={{xm:Xm, xl:Xl,xr: Xr,xloop: Xloop}} />
            </div>
        );
        document.getElementById("showans").innerHTML=ans;
    }
    
    render(){
        return(
            <div>
                <br/>
                <h3>Bisection Method</h3>
                <br/>
                <Form>
                    <Form.Group className="mb-3">
                        <div>
                            <Form.Control id="equation" type="text" placeholder="f(x)" style={{width:"20%",margin: "0 auto"}}></Form.Control>                        
                            <Form.Control id="XL" type="number" placeholder="XL" style={{width:"20%" ,margin: "0 auto"} }></Form.Control>
                            <Form.Control id="XR" type="number" placeholder="XR" style={{width:"20%" ,margin: "0 auto"} }></Form.Control>                           
                        </div>
                        <Button onClick={this.getValue} variant="success" style={{marginTop:"20px"}}>Summit</Button>
                    </Form.Group>
                </Form>
                <br/>
                <div>
                    <h4>Result is:</h4>
                    <div id="showans"></div>
                </div>
                <div id="showchart">
                    <ApexChart data={{xm:Xm, xl:Xl,xr: Xr,xloop: Xloop}} />
                </div>
            </div>
        );
    }
}
export default Bisection;