import { Component } from "react";

class SearchBox extends Component<any, any> {

  render() {
    const {onChangeHandler, placeholder, styling} = this.props;
    return (
      <input
        type="search"
        placeholder={placeholder}
        className={styling}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;