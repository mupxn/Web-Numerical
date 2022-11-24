import { Component, React } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class MatrixInversion extends Component{
    constructor(){
        super()
        
    }
    componentDidMount(){
        
    }
    createinputbox =()=>{
        var Size = document.getElementById("Matsize").value;
        //console.log(Size)
        var MatString = '';
        for(var i=0;i<Size;i++){
          for(var j=0;j<Size;j++){
            MatString +="<input id='Mat"+i+j+"' type='float' style='width:50px;margin:1px'/>";
          }
          MatString +="<br>";
        }
        document.getElementById("MatInput").innerHTML=MatString;
    }
    MatrixInversion =()=>{
        var Size = document.getElementById("Matsize").value;
        var met=[];
        var metans=[];
        //console.log(Size);
        for(var x=0;x<Size;x++){
            metans.push([])//([])
            for(var y=0;y<Size;y++){
                if(x==y){
                    metans[x].push(1);
                }
                else{
                    metans[x].push(0);
                }
            }
            //console.log(metans);
        }
        for(let i=0;i<Size;i++){
            met.push([]);
            //metans.push([]);
            for(let j=0;j<Size;j++){
                //console.log("mat"+i+j);
                met[i].push(document.getElementById("Mat"+i+j).value);
            }
            //console.log(met);  
        }
        for(let i=0; i<met.length; i++) {
            for(let j=i+1; j<met.length; j++){
                var multivar = met[j][i];
                if(i+1<=met.length){
                    for(let k=0; k<met.length; k++){
                        x = (met[j][k]-((met[i][k]/met[i][i])*multivar));
                        met[j][k] = x;
                        y = (metans[j][k]-((metans[i][k]/met[i][i])*multivar));
                        metans[j][k] = y;
                        console.log(metans);
                    }
                }
            }
        }
        console.log(metans);
        
        for(let i=met.length-1; i>=0; i--) {
            for(let j=0; j<i; j++){
                multivar = met[j][i];
                if(i+1<=met.length){
                    for(let k=0; k<met.length; k++){
                        x = (met[j][k]-((met[i][k]/met[i][i])*multivar));
                        met[j][k] = x;
                        y = (metans[j][k]-((metans[i][k]/met[i][i])*multivar));
                        metans[j][k] = y;
                    }
                }
            }
        }
        for(let i=met.length-1; i>=0; i--) {
            var divide = met[i][i];
            for(let j=0; j<met.length; j++){
                met[i][j]/= divide;
                metans[i][j]/= divide;
            }this.printmet(metans)
        }
        
    }
    printmet=(met)=>{
        var ans="<table>"
        for(var i=0;i<met.length;i++){
            ans+="<tr>"
            for(var x=0;x<met.length;x++){
                if(i==x){
                    ans+="<td>"+1+"</td>"
                }
                else{
                    ans+="<td>"+0+"</td>"
                }
            }
            ans+="<td>"+"|"+"</td>"
            for(var j=0;j<met.length;j++){
                ans+="<td>"+met[i][j]+"</td>"
                //console.log(mat[i][j]);
            }
            ans+="</tr>"
        }
        ans+="</table>"
        document.getElementById("show").innerHTML=ans;
    }
    render(){
        return(
            <Container style={{ margin: "auto"}}>
                <br/>
                <h3>Matrix Inversion</h3>
                <br/>
                    <Row>      
                        <Form.Group as={Row} className="mb-3">
                        <Col>Matrix Dimension</Col>                          
                            <Col>
                                <Form.Select onChange={this.createinputbox} id="Matsize" aria-label="Default select example">
                                <option>Choose</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>                          
                    </Row>
                    <div id="MatInput"></div>
                    <Button onClick={this.MatrixInversion} variant="danger">
                        summit
                    </Button>
                    <br/>
                    <br/>
                    <div id="show"></div>
                    
            </Container>
        );
    }
}
export default MatrixInversion