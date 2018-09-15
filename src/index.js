import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './styles.css'

export default class TagsArea extends Component {
  static propTypes = {
    classes: PropTypes.object,    
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  }

  constructor(props) {
    super(props);

    this.el = React.createRef();
        
    this.state = { tags: [] }

    this.focus = this.focus.bind(this);
    this.handleCaretKeyDown = this.handleCaretKeyDown.bind(this);    
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() { this.focus(); }
  
  focus() {
    const el = this.el.current;
    el !== null && el.focus();
  }

  handleCaretKeyDown(e) {
    const { tags } = this.state,
          { onSubmit } = this.props,
          el = this.el.current,
          nTag = el.innerText;

    switch(e.key) {
      case "Backspace":
        if (nTag.length === 0) this.setState({ tags: tags.slice(0, -1) });
        break;
      
      case " ": 
        e.preventDefault();
        if (nTag.length > 0) { el.innerHTML = ""; this.setState({ tags: [...tags, nTag] }); }
        break;
      
      case "Enter":
        e.preventDefault();
        el.innerHTML = "";
        this.setState({ tags: [] })
        onSubmit(nTag.length === 0 ? tags : [...tags, nTag]);
        break;

      default:
        break;
    }
  }

  handleClick() { this.focus(); }

  render() {
    const { tags } = this.state,
          { classes, placeholder } = this.props,
          className = {
            caret: classnames(styles.caret, classes.caret, {
              [styles.placeholder]: tags.length === 0
            }),
            tag: classnames(styles.tag, classes.tag),
            tagsarea: classnames(styles.tagsarea, classes.tagsarea)
          },
          handlers = {
            caret: { onKeyDown: this.handleCaretKeyDown },
            tagsarea: { onClick: this.handleClick }
          };
    
    return (
      <span className={className.tagsarea} {...handlers.tagsarea}>
        { tags.map((t, i) => <span key={i} className={className.tag}>{t}</span>) }
        <span className={className.caret} contentEditable="true" {...handlers.caret} placeholder={placeholder} ref={this.el}></span>
      </span>
    )
  }
}

TagsArea.defaultProps = {
  classes: { caret: null, tag: null, tagsarea: null }
}
