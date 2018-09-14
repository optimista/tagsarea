import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TagsArea extends Component {
  static propTypes = {   
    classes: PropTypes.object,
    onSubmit: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.el = React.createRef();
        
    this.state = {
      tags: [ "Banana", "Tea", "Coffee", "Mobile" ]
    }   

    this.handleCaretKeyDown = this.handleCaretKeyDown.bind(this);    
  }

  componentDidMount() {
    const el = this.el.current;
    el !== null && el.focus();
  }

  handleCaretKeyDown(e) {
    const { tags } = this.state,
          { onSubmit } = this.props,
          el = this.el.current,
          nTag = el.innerText;

    switch(e.key) {
      case "Backspace": this.setState({ tags: tags.slice(0, -1) }); break;
      case " ": 
        e.preventDefault();
        if (nTag.length > 0) { el.innerHTML = ""; this.setState({ tags: [...tags, nTag] }); }
        break;
      case "Enter": onSubmit(tags); break;
      default: break;
    }
  }

  render() {
    const { tags } = this.state,
          { classes } = this.props,
          caretHandlers = { onKeyDown: this.handleCaretKeyDown };

    return (
      <span className={classes.tagsarea}>
        { tags.map((t, i) => <span key={i} className={classes.tag}>{t}</span>) }
        <span contentEditable="true" {...caretHandlers} ref={this.el}></span>
      </span>
    )
  }
}

TagsArea.defaultProps = {
  classes: { tag: null, tagsarea: null }
};
