import { Component, React } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
class Conjugate extends Component{
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
    Conjugate=()=>{
        var Size = document.getElementById("Matsize").value;
        var A=[]
        var B=[]
        var X=[]
        // var A = [[5,2,0,0],
        //       [2,5,2,0],
        //       [0,2,5,2],
        //       [0,0,2,5]];
        // var B = [[12],[17],[14],[7]];
        // var X = [[0],[0],[0],[0]];
        var lambda=[];
        var alpha = [];
        var D = [];
        var R = [];
        var count =0;
        for(let i=0;i<Size;i++){
            A.push([]);
            for(let j=0;j<Size;j++){
                //console.log("mat"+i+j);
                console.log(document.getElementById("Mat"+i+j).value);
                A[i].push(document.getElementById("Mat"+i+j).value);
                console.log(A[i]);
            }
            B.push([]);
            X.push([])
            B[i].push(document.getElementById("Matans"+i+"0").value);
            X[i].push(0)
        }
        //-----------------create_function----------------------
        const plusmat = (mat1,mat2) => {
            var pmat =[];
            for(let i=0; i<mat1.length; i++) {pmat.push([]);}
            for(let i=0; i<mat1.length ; i++) {
                for(let j=0;j< mat1[0].length; j++) {
                    pmat[i].push(mat1[i][j]+mat2[i][j]);
                }
            }
            return pmat;
        };
        const minusmat = (mat1,mat2) => {
            var mnmat =[];
            for(let i=0; i<mat1.length; i++) {mnmat.push([]);}
            for(let i=0; i<mat1.length ; i++) {
                for(let j=0;j< mat1[0].length; j++) {
                    mnmat[i].push(mat1[i][j]-mat2[i][j]);
                }
            }
            return mnmat;
        };
        const multipymat = (mat1,mat2) =>{
            if(mat1[0].length===mat2.length){
                let mtpmat = [];
                for(let i=0; i<mat1.length; i++) {mtpmat.push([]);}
                let sum=0;
                for(let i   = 0; i < mat1.length; i++) {
                    for(let j = 0; j < mat2[0].length; j++) {
                        for(let k = 0; k < mat1[0].length; k++){
                            sum+=mat1[i][k]*mat2[k][j];
                        }
                        mtpmat[i].push(sum);
                        sum=0;
                    }
                }
                return(mtpmat);
            }else{console.log("matrics can't multipy");}
            
        };
        const transpose = mat => {
            let  tmat = [];
            for(let i=0; i<mat[0].length; i++) { 
                tmat.push([]);
                for(let j=0; j< mat.length; j++) {
                    tmat[i].push(mat[j][i]);
                }
            }
            return tmat;
        }
        //------------------------step1------------------------
        R = minusmat(multipymat(A,X),B);
        //------------------------step2------------------------
        D = multipymat(R,[[-1]]);
        //------------------------step3------------------------
        do{
            var Dt =transpose(D);
            lambda=-1*((multipymat(Dt,R))[0][0]/(multipymat(multipymat(Dt,A),D))[0][0]);
            X = plusmat(X,multipymat(D,[[lambda]]));
            R = minusmat(multipymat(A,X),B);
            var Rt = transpose(R);
            alpha = (multipymat(multipymat(Rt,A),D))/(multipymat(multipymat(Dt,A),D));
            D = plusmat(multipymat(R,[[-1]]),multipymat(D,[[alpha]]));
            console.log (++count+" ----> Error = " +Math.sqrt(multipymat(transpose(R),R)[0][0]));
        
        }while(Math.sqrt(multipymat(transpose(R),R)[0][0])>=0.000001);
        var ans='';
        for(let i = 0; i < A.length; i++) {
            ans += "x"+(i+1)+ " = "+X[i]+"<br/>"
            // console.log("x"+(i+1)+" = "+metx[i]);
        }
        document.getElementById("show").innerHTML=ans;
    }
    
    
    render(){
        return(
            <Container style={{ margin: "auto"}}>
                <br/>
                <h3>Conjugate</h3>
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
                    <Button onClick={this.Conjugate} variant="danger">
                        summit
                    </Button>
                    <br/>
                    <br/>
                    <div id="show"></div>
            </Container>
        );
    }
}
export default Conjugate;