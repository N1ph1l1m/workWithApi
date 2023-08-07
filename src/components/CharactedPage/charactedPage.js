import React, { Component } from "react";
import ItemList from "../itemList";
import ErrorMessage from "../errorMessage";
import CharDetails , {Field}from "../charDetails";
import gotService from "../../services/gotService";
import RowBlock from "../rowBlock/rowBlock";



export default class CharactedPage extends Component {
  gotService = new gotService();

  state = {
    selectedChar: 130,
    error: false
  }

  onItemSelected = (id) => {
    this.setState({
      selectedChar: id
    })
  }

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    const itemList =(
      <ItemList
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllCharacters}
            renderItem = {({name, gender}) => `${name} (${gender})`}
            />
            )
    
      const charDetails = (
      <CharDetails charId={this.state.selectedChar} fetchData={(charId) => this.gotService.getCharacter(charId)}>
          <Field field ='gender' label='Gender'/>
          <Field field ='born' label='Bord'/>
          <Field field ='died' label='Died'/>
          <Field field ='culture' label='Culture'/>
      </CharDetails>
    )
    return (
      <RowBlock left={itemList} right={charDetails}/>
    )
  }
}
