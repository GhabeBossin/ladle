import React, { Component } from "react";
import fuzzyFilterFactory from "react-fuzzy-filter";

// these components share state and can even live in different components
const { InputFilter, FilterResults, changeInputValue } = fuzzyFilterFactory();


class FuzzySearch extends Component {
  constructor() {
    super();
    this.state = {
      words: []
    }
  }

  componentDidMount() {
    console.log("this is data fro search", this.props)
    this.createWordsArray()
  }
  createWordsArray = () => {
    let wordArray = this.props;
    // wordArray.forEach((element) =>
      console.log("elements", this.props)
    // )

  }
  render() {
    const items = [
      // { name: this.props.data, meta: this.props.data, tag: "a" }
      // { en_word: "first", meta: "first|123", tag: "a" },
      // { name: "second", meta: "second|443", tag: "b" },
      // { name: "third", meta: "third|623", tag: "a" },
    ];
    const fuseConfig = {
      keys: ["meta", "tag"],
    };
    return (
      <div>
        <InputFilter debounceTime={200} />
        <div>Translate Word</div>
        <FilterResults items={items} fuseConfig={fuseConfig}>
          {filteredItems => {
            return (
              <div>
                {filteredItems.map(item => (
                  <div>{item.name}</div>
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