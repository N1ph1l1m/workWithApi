export default class GotService {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url},  received  ${res.status}`);
    }

    return await res.json();
  };

  getAllBooks = async () => {
      const res = await this.getResource('/books/');
      return res.map(this._transformBook);
  }

  getBook = async (id) => {
    const book = await this.getResource(`/books/${id}`);
    return this._transformBook(book);
  }

  getAllCharacters = async () => {
    const result = await this.getResource(`/characters?page=5&pageSize=10`);
    return result.map(this._transformCharacter);
  }
  getCharacter = async (id) => {
    const character = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(character);
  }
  getAllHouses =  async () =>{
      const result = await this.getResource(`/houses/`);
      return result.map(this._transformHouse);
  }

  getHouse = async (id) => {
    const house = await this.getResource(`/houses/${id}`);
    return this._transformHouse(house);
  }
 
  isSet(data){
    if(data){
      return data
    }else{
      return `no data : (`
    }
  }

  extracId = (item) =>{
    const idRegExp = /\/([0-9]*)$/;
    return item.url.match(idRegExp)[1];
  }

  _transformCharacter(char) {
    return {
      name: char.name,
      gender: char.gender,
      born: char.born,
      died: char.died,
      culture: char.culture,
    };
  }
  _transformHouse(house) {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      coatOfArms: house.coatOfArms,
      overlord: house.overlord,
      ancestralWeapons: house.ancestralWeapons,
    };
  }
  _transformBook(book) {
    return {
      name: book.name,
      numberOfPages: book.numberOfPages,
      publisher: book.publisher,
      released: book.released,
    };
  }
}
