import React, { Component } from "react";
import fuzzyFilterFactory from "react-fuzzy-filter";
import { Form, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

// these components share state and can even live in different components
const { InputFilter, FilterResults, changeInputValue } = fuzzyFilterFactory();

class FuzzySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      searchWord: ""
    }
  }

  componentDidMount() {
    this.createWordsArray()
  }

  createWordsArray = () => {
    let wordArray = [];
    this.props.data.forEach((element) =>
    wordArray.push({name: element.en_word, meta: element.en_word })
    )
    this.setState({ words: wordArray })
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') {
    this.props.handleClick(this.state.searchWord)
    changeInputValue()
    }
  }

  onChange = (word) => {
    this.setState({ searchWord: word })
    return word
  }

  onClick = () => {
    this.props.handleClick(this.state.searchWord)
    this.setState({  })
  }

  render() {
    // console.log("elements", Array.isArray(this.state.words))
    const items = this.state.words
    const fuseConfig = {
      keys: ["meta", "tag"],
    };
    return (
      <div>
        <InputGroup>
          <InputFilter inputProps={{ placeholder: this.props.placeholder, name: this.props.name, onKeyUp: this.handleEnter }} onChange={this.onChange} debounceTime={200}/>
          <InputGroupAddon addonType="append">
            <Button type="button" onClick={this.onClick} color="primary" >Search</Button>
          </InputGroupAddon>
          </InputGroup>
          <FilterResults defaultAllItems={false} items={items} fuseConfig={fuseConfig}>
          {filteredItems => {
            return (
              <div>
                {filteredItems.map(item => (
                  <div key={item.name}>{item.name}</div>
                ))}
              </div>
            );
          }}
        </FilterResults>
      </div>
    );
  }
}

export default FuzzySearch
