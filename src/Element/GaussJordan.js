import { Component, React } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class GaussJordan extends Component{
    constructor(){
        super()

    }
    componentDidMount(){

    }
    createinputbox =()=>{
        var Size = document.getElementById("Matsize").value;
        console.log(Size)
        var MatString = '';
        for(var i=0;i<Size;i++){
          for(var j=0;j<Size;j++){
            MatString +="<input id='Mat"+i+j+"' type='float' style='width:50px;margin:1px'/>";
          }
          MatString +=" | <input id='Matans"+i+"0' type='float' style='width:50px;margin:1px'/>";
          MatString +="<br>";
        }
        //console.log(MatString);
        document.getElementById("MatInput").innerHTML=MatString;
    }
    GaussJordan=()=>{
        var Size = document.getElementById("Matsize").value;
        var mat=[];
        var matans=[];
        for(let i=0;i<Size;i++){
            mat.push([]);
            for(let j=0;j<Size;j++){
                //console.log("mat"+i+j);
                mat[i].push(document.getElementById("Mat"+i+j).value);
            }
            matans.push([]);
            matans[i].push(document.getElementById("Matans"+i+"0").value);   
        }
    }
    
    render(){
        return(
            <Container style={{ margin: "auto"}}>
                <br/>
                <h3>Gauss Jordan</h3>
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
                    <Button onClick={this.GaussElimination} variant="danger">
                        summit
                    </Button>
                    <br/>
                    <br/>
                    <div id="show"></div>
            </Container>
        );
    }
}
export default GaussJordan;