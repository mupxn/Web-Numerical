import { Component, React } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class GaussElimination extends Component{
    constructor(){
        super()

    }
    componentDidMount(){

    }
    print=(met)=>{
        var ret="<table>"
        console.log(met);//A
        for(var i=0;i<met.length;i++){
            ret+="<tr>"
            for(var j=0;j<met[0].length;j++){
                ret+="<td>"+met[i][j]+"</td>"
                //console.log(mat[i][j]);
            }
            ret+="</tr>"
        }
        ret+="</table>"
        //document.getElementById("showcheck").innerHTML=ret;
        return ret
    }
    createinputbox =()=>{
        var Size = document.getElementById("Matsize").value;
        console.log(Size)
        var MatString = '';
        for(var i=0;i<Size;i++){
          for(var j=0;j<Size;j++){
            MatString +="<input id='Mat"+i+j+"' type='number' style='width:50px;margin:1px'/>";
            console.log("Mat"+i+j.value);
            //console.log("MatStirng");
            //console.log(document.getElementById("Mat"+i+j).value);
          }
          MatString +=" | <input id='Matans"+i+"0' type='number' style='width:50px;margin:1px'/>";
          MatString +="<br>";
        }
        //console.log(MatString);
        document.getElementById("MatInput").innerHTML=MatString;
    }
    
    GaussElimination =()=>{
        var Size = document.getElementById("Matsize").value;
        var mat=[];
        var matans=[];
        console.log("GaussElimination");
        for(let i=0;i<Size;i++){
            mat.push([]);
            for(let j=0;j<Size;j++){
                //console.log("mat"+i+j);
                console.log(document.getElementById("Mat"+i+j).value);
                mat[i].push(document.getElementById("Mat"+i+j).value);
                console.log(mat[i]);
            }
            matans.push([]);
            matans[i].push(document.getElementById("Matans"+i+"0").value);   
        }
        var ret=''
        for(let i=0; i<mat.length; i++) {
            for(let j=i+1; j<mat.length; j++){
                var multivar = mat[j][i];
                if(i+1<=mat.length){
                    for(let k=0; k<mat.length; k++){
                        var x = (mat[j][k]-((mat[i][k]/mat[i][i])*multivar));
                        //console.log(mat[j][k],mat[i][k],mat[i][i],multivar);
                        //console.log("mat"+i+j);
                        mat[j][k] = x;
                    }
                    var y = (matans[j][0]-((matans[i][0]/mat[i][i])*multivar));
                    //console.log(matans[j][0],matans[i][0],mat[i][i],multivar);
                    matans[j][0] = y;
                }
                ret+="<table>";
                ret+="<tr>"
                ret+="<td>"+this.print(mat)+"</td>"
                ret+="<td>"+this.print(matans)+"</td>"
                ret+="</tr>"
                ret+="</table>"
            }
        }
        document.getElementById("show2").innerHTML=ret
        x=[];
        for(let j=0; j<mat.length; j++){
            x.push(null);
        }
        for(let i=mat.length-1; i>=0; i--) {
            ans = 0;
            for(let j=mat.length-1; j>=0; j--){
                if(x[j]!=null && mat[i][j]!=0){
                    matans[i][0] = matans[i][0]-(mat[i][j]*x[j]);
                }else if(mat[i][j]!=0){
                    ans += matans[i][0]/mat[i][j];
                }
            }
            x[i]=ans;
        }
        var ans='';
        for(let j=0; j<mat.length; j++){
            ans+="x"+String(j+1)+" = "+String(x[j])+"<br/>";
        }
        document.getElementById("show").innerHTML=ans;
    }
    
    render(){
        return(
            <Container style={{ margin: "auto"}}>
                <br/>
                <h3>Gauss Elimination</h3>
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
                    <div id="show2"></div>
            </Container>
        );
    }
}
export default GaussElimination;