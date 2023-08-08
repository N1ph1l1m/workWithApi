import React, { Component } from "react";
import ItemList from "../itemList";
import ErrorMessage from "../errorMessage";
import CharDetails, { Field } from "../charDetails";
import gotService from "../../services/gotService";
import RowBlock from "../rowBlock/rowBlock";

export default class BooksPage extends Component {
  gotService = new gotService();

  state = {
    selectedChar: 1,
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
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllBooks}
        renderItem={(item) => item.name}
      />
    );

    const charDetails = (
      <CharDetails charId={this.state.selectedChar}
                   fetchData={(charId) => this.gotService.getBook(charId)}>
        <Field field="name" label="name" />
        <Field field="publisher" label="Publiser" />
        <Field field="numberOfPages" label="numberOfPag" />
        <Field field="released" label="Released" />
      </CharDetails>
    );

    return <RowBlock left={itemList} right={charDetails} />;
  }
}
