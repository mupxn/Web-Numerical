import { Component, React } from "react";
import { Button, Container } from "react-bootstrap";
import {useState} from "react";
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import math from "mathjs";
import { create, all } from 'mathjs'


class Carmer extends Component{
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
    Cramer=()=>{
        var Size = document.getElementById("Matsize").value;
        var mat=[];
        var matans=[];
        var metx = [];
        //console.log("CramersRule");
        for(let i=0;i<Size;i++){
            mat.push([]);
            for(let j=0;j<Size;j++){
                //console.log("mat"+i+j);
                mat[i].push(document.getElementById("Mat"+i+j).value);
                //console.log(mat[i]);
            }
            matans.push([]);
            matans[i].push(document.getElementById("Matans"+i+"0").value);
            document.getElementById("showA").innerHTML=this.print(mat)
            document.getElementById("showB").innerHTML=this.print(matans)
        }
        const det = met =>{
            var determinant = 0;
            for (let k = 0; k < met.length; k++) {
                var multipy = 1;
                for (let l = 0; l < met.length; l++) {
                    var index = k+l;
                    if (index > met.length-1) {
                        index-=met.length;
                    }      
                    multipy *= met[l][index];
                }
                determinant += multipy;
            }
           
            for (let k = 2; k < (met.length*2)-1; k++) {
                multipy = 1;
                for (let l = 2; l >= 0; l--) {
                    index = k-l;
                    if (index > met.length-1) {
                        index-=met.length;
                    }
                    if (index < 0) {
                        index+=met.lengt-1;
                    }
                    multipy *= met[index][l];
                }
                determinant -= multipy;
            }
            return determinant;
        };
        
        const copymat = met => {
            var copymet = [];
            for(let i = 0; i < met.length; i++) {
                copymet.push([]);
            }
            for(let i = 0; i < met.length; i++) {
                    copymet[i] = [...mat[i]];  
            }
            return copymet;
        };
        var ans ='';
        for (let i = 0; i < Size; i++) {
            var cramermet = copymat(mat);
            metx.push([])
            for (let j = 0; j < Size; j++){
                cramermet[j][i]=matans[j][0];
            }
            metx[i].push(det(cramermet)/det(mat))
            //console.log(metx);
            ans += "x"+String(i+1)+" = "+String(det(cramermet)/det(mat))+"<br>";
        }
        this.Check(mat,metx)
        document.getElementById("show").innerHTML=ans;
    }
    Check=(mat,metx)=>{
        var ans=0
        var metans=[]
        console.log(metx);
        //console.log(mat);
        for(let i=0;i<mat.length;i++){
            metans.push([])
            for(let j=0;j<metx[0].length;j++){
                for(let k=0;k<mat[0].length;k++){
                    ans+=mat[i][k]*metx[k][j]
                }
                metans[i].push(ans)
                ans=0
            }
        }
        document.getElementById("showX").innerHTML=this.print(metx)
        document.getElementById("showB").innerHTML=this.print(metans)

        //console.log(metans)
        // this.printcheck(mat,metx,metans)
    }
    // printcheck=(mat,metx,metans)=>{
    //     var ret="<table>"
    //     console.log(mat);//A
    //     console.log(metans);//B
    //     console.log(metx);//X
    //     for(var i=0;i<mat.length;i++){
    //         ret+="<tr>"
    //         for(var x=0;x<mat.length;x++){
    //             ret+="<td>"+mat[i][x]+"</td>"
    //         }
    //         ret+="<td>"+"|"+"</td>"
    //         for(var z=0;z<metx[0].length;z++){
    //             ret+="<td>"+metx[i][z]+"</td>"
    //         }
    //         ret+="<td>"+"="+"</td>"
    //         for(var j=0;j<metans[0].length;j++){
    //             ret+="<td>"+metans[i][j]+"</td>"
    //             //console.log(mat[i][j]);
    //         }
    //         ret+="</tr>"
    //     }
    //     ret+="</table>"
    //     document.getElementById("showcheck").innerHTML=ret;
    // }
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
    render(){
        return(
            <Container style={{ margin: "auto"}}>
                <br/>
                <h3>Carmer</h3>
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
                    <Button onClick={this.Cramer} variant="danger">
                        summit
                    </Button>
                    <br/>
                    <br/>
                    <div id="show"></div>
                    <div>CHECK</div>
                    {/* <div id="showcheck"></div> */}
                    <table>
                        <tr>
                            <td id="showA"></td>
                            <td id="showX"></td>
                            <td id="showB"></td>
                        </tr>
                    </table>
            </Container>
        );
    }
}
export default Carmer;