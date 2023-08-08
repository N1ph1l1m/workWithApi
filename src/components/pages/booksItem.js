import React, { Component } from "react";
import CharDetails, { Field } from "../charDetails";
import gotService from "../../services/gotService";

export default class BooksItem extends Component{
    gotService = new gotService();

    state = {
        selectedBook: 3,
      };


    render() {
        return (
            <CharDetails charId={this.state.selectedChar}
                   fetchData={(charId) => this.gotService.getBook(charId)}>
        <Field field="name" label="name" />
        <Field field="publisher" label="Publiser" />
        <Field field="numberOfPages" label="numberOfPag" />
        <Field field="released" label="Released" />
      </CharDetails>
        );
    }
} 