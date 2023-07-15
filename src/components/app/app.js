import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import ErrorMessage from "../errorMessage";

export default class App extends Component {
  state = {
    showRandomChar: true,
    selectedChar:130,
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

  onCharSelected = (id) =>{
    this.setState({
      selectedChar:id
    })
  }

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
          <Row>
            <Col md="6">
              <ItemList onCharSelected = {this.onCharSelected}/>
            </Col>
            <Col md="6">
              <CharDetails charId= {this.state.selectedChar} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
