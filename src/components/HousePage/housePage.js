import React, { Component } from "react";
import ItemList from "../itemList";
import ErrorMessage from "../errorMessage";
import CharDetails, { Field } from "../charDetails";
import gotService from "../../services/gotService";
import RowBlock from "../rowBlock/rowBlock";

export default class HousePage extends Component {
  gotService = new gotService();

  state = {
    selectedChar: 378,
    error: false,
  };

  onItemSelected = (id) => {
    this.setState({
      selectedChar: id,
    });
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    const itemList = (
      <ItemList
        onItemSelected = {this.onItemSelected}
        getData={this.gotService.getAllHouses}
        renderItem = {(item) => item.name}
      />
    );

    const charDetails = (
      <CharDetails charId={this.state.selectedChar}
             fetchData={(charId) => this.gotService.getHouse(charId)}>
        <Field field="name" label="name" />
        <Field field="region" label="Region" />
        <Field field="words" label="Words"/>
        <Field field= 'coatOfArms' label="Coat Of Arms" />
        <Field field="overlord" label="Overlord" />
        <Field field="ancestralWeapons" label="AncestralWeapons" />
      </CharDetails>
    );

    return <RowBlock left={itemList} right={charDetails} />;
  }
}
