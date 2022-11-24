import { Component, React } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends Component{
    constructor(){
        super()
        
    }
    componentDidMount(){
        
    }
    createinputbox =()=>{
        var Size = document.getElementById("Matsize").value;
        //console.log(Size)
        var MatString = ''
        //var MatString2 = ''
        for(var i=0;i<Size;i++){
          for(var j=0;j<Size;j++){
            MatString +="<input id='Mat1"+i+j+"' type='number' style='width:50px;margin:1px'/>";
            // MatString2 +="<input id='Mat"+i+j+"' type='number' style='width:50px;margin:1px'/>";
          }
          MatString +=" | "
          for(var z=0;z<Size;z++){
            MatString +="<input id='Mat2"+i+z+"' type='number' style='width:50px;margin:1px'/>";
          }
        MatString +="<br>"
        }
        document.getElementById("MatInput").innerHTML=MatString;
    }
    Expression=()=>{
        var Size = document.getElementById("Matsize").value;
        var Expression = document.getElementById("expression").value;
        var mat1=[];
        var mat2=[];
        var metans=[];
        //console.log(Size);
        for(let i=0;i<Size;i++){
            mat1.push([]);
            mat2.push([]);
            for(let j=0;j<Size;j++){
                mat1[i].push(document.getElementById("Mat1"+i+j).value);
                mat2[i].push(document.getElementById("Mat2"+i+j).value);
            }
            console.log(mat1[i]);
            console.log(mat2[i]);
        }
        // console.log(Expression);
        // console.log(Size);
        if(Expression==1){
            for(let i=0;i<mat1.length;i++){
                metans.push([])//([])
                for(let j=0;j<mat1.length;j++){
                    metans[i].push(parseInt(mat1[i][j])+parseInt(mat2[i][j]))
                }
                console.log(metans[i]);
            }
            this.printmet(metans)
        }
        else if(Expression == 2){
            for(let i=0;i<mat1.length;i++){
                metans.push([])//([])
                for(let j=0;j<mat1.length;j++){
                    metans[i].push(parseInt(mat1[i][j])-parseInt(mat2[i][j]))
                }
                console.log(metans[i]);
            }
            this.printmet(metans)
        }
        else if(Expression == 3){
            var ans=0
            var metans=[]
            for(let i=0;i<mat1.length;i++){
                metans.push([])
                for(let j=0;j<mat2[0].length;j++){
                    for(let k=0;k<mat1[0].length;k++){
                        ans+=mat1[i][k]*mat2[k][j]
                    }
                    metans[i].push(ans)
                    ans=0
                }
            }
            this.printmet(metans)
            console.log(metans);
        }
    }
    printmet=(mat)=>{
        var ans="<table>"
        for(var i=0;i<mat.length;i++){
            ans+="<tr>"
            for(var j=0;j<mat.length;j++){
                ans+="<td>"+mat[i][j]+"</td>"
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
                <h3>+ - x</h3>
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
                    <div >
                        <Col id="MatInput"></Col>
                    </div>
                    <Row>
                        <Form.Group as={Row} className="mb-3">
                        <Col>Expression</Col>                          
                            <Col>
                                <Form.Select onChange={this.Expression} id="expression" aria-label="Default select example">
                                <option>Choose</option>
                                <option value="1">+</option>
                                <option value="2">-</option>
                                <option value="3">*</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>                 
                    </Row>
                    <br/>
                    <br/>
                    <div id="show"></div>
            </Container>
        );
    }

}
export default Home