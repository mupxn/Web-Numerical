import { NavBar } from './NavBar';
import Home from './Element/Home';
import Bisection from './Element/Bisection';
import FalsePosition from './Element/FalsePosition';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import OnePoint from './Element/OnePoint';
import NewtonRaphson from './Element/NewtonRaphson';
import Secant from './Element/Secant';
import Carmer from './Element/Carmer';
import GaussElimination from './Element/GaussElimination';
import MatrixInversion from './Element/MatrixInversion';
import Cholesky from './Element/Cholesky';
import GaussSeidel from './Element/GaussSeidel';
import Jacobi from './Element/Jacobi';
import Conjugate from './Element/Conjugate';
import Lagrange from './Element/Lagrange';
import Linear from './Element/Linear';
import Polynomial from './Element/Polynomial';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Bisection" element={<Bisection/>}/>
        <Route path="/False-Position" element={<FalsePosition/>}/>
        <Route path="/One-Point" element={<OnePoint/>}/>
        <Route path="/Newton-Raphson" element={<NewtonRaphson/>}/>
        <Route path="/Secant" element={<Secant/>}/>
        <Route path="/Carmer" element={<Carmer/>}/>
        <Route path="/GaussElimination" element={<GaussElimination/>}/>
        <Route path="/MatrixInversion" element={<MatrixInversion/>}/>
        <Route path="/Cholesky" element={<Cholesky/>}/>
        <Route path="/Jacobi" element={<Jacobi/>}/>
        <Route path="/GaussSeidel" element={<GaussSeidel/>}/>
        <Route path="/Conjugate" element={<Conjugate/>}/>
        <Route path="/Lagrange" element={<Lagrange/>}/>
        <Route path="/Linear" element={<Linear/>}/>
        <Route path="/MultipleLinear" element={<Polynomial/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
