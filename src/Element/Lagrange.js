import { Component, React } from "react";
import { Button, Table } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Lagrange extends Component{
    constructor(){
        super()
        
    }
    componentDidMount(){
        
    }
    Lagrange =()=>{
        var input = document.getElementById("x").value
        var number = document.getElementById("Number").value
        var fx = [
            [0, 9.81],
            [20000, 9.7487],
            [40000, 9.6879],
            [60000, 9.6879],
            [80000, 9.5682],
        ];
        var L = (x, j, arr) => {
            var top = 1,divide = 1;
            for (var l in arr) {
                if (l !== j) {
                top *= fx[arr[l] - 1][0] - x;
                divide *= fx[arr[l] - 1][0] - fx[arr[j] - 1][0];
                }
            }
            return top / divide;
        };
        var Fx = (x, arr) => {
            var ans = 0;
            for (let i in arr) {
              ans += fx[arr[i] - 1][1] * L(x, i, arr);
            }
            return ans;
        };
        if(number==1){
            var ans = Fx(input, [1, 5])

        }
        else if(number==2){
            var ans = Fx(input, [1, 3, 5])
        }
        else if(number==3){
            var ans = Fx(input, [1, 2, 3, 4, 5])
        }
        document.getElementById("show").innerHTML=ans;
        console.log("1.1 : " + Fx(input, [1, 5]));
        console.log("1.2 : " + Fx(input, [1, 3, 5]));
        console.log("1.3 : " + Fx(input, [1, 2, 3, 4, 5]));
    }
    render(){
        return(
            <Container style={{ margin: "auto"}}>
                <br/>
                <h3>Lagrange</h3>
                <br/>
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>x</th>
                        <th>y</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>9.81</td>
                    </tr>
                <tr>
                    <td>1</td>
                    <td>20,000</td>
                    <td>9.7487</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>40,000</td>
                    <td>9.6879</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>60,000</td>
                    <td>9.6879</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>80,000</td>
                    <td>9.5682</td>
                </tr>
            </tbody>
                </Table>
                    <Row>    
                        <Form.Group as={Row} className="mb-3">
                        <Col>Lagrange</Col>
                            <Col>
                                <Form.Select id="Number" aria-label="Default select example">
                                <option>Choose</option>
                                <option value="1">Linear</option>
                                <option value="2">Quadratic</option>
                                <option value="3">Poiynomial</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>              
                    </Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control id="x"type="number" placeholder="input x" style={{width:"20%" ,margin: "0 auto"} }/>
                        </Form.Group>
                    </Form>
                    <Button onClick={this.Lagrange} variant="danger">
                        summit
                    </Button>
                    <div id="show"></div>
            </Container>
        );
    }
}
export default Lagrange