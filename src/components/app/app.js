import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMessage from "../errorMessage";
import BooksPage from "../BooksPage";
import CharactedPage from "../CharactedPage";
import HousePage from "../HousePage/housePage";
import gotService from "../../services/gotService";
//import {BraouserRouter as Router, Route} from 'react-router-dom';


export default class App extends Component {
  gotService = new gotService();

  state = {
    showRandomChar: true,
    error:false
  };

  componentDidCatch(){
    console.log("error");
    this.setState({
      error: true
    })
  }

  toggleRandomChar = () => {
    this.setState((state) => {
      return {
        showRandomChar: !state.showRandomChar
      } 
    });
  };


  render() {
    const char = this.state.showRandomChar ? <RandomChar /> : null;
    if(this.state.error){
      return <ErrorMessage/>
    }  
    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
            <button
                type="button"
                class="btn btn-info"
                onClick={this.toggleRandomChar}>
                Show/hide component
              </button>
              {char}
            </Col>
          </Row>
          <CharactedPage/>
          <BooksPage/>
          <HousePage/>
        </Container>
      </>
    );
  }
}
