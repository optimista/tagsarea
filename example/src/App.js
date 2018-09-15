import React, { Component } from 'react'
import TagsArea from 'tagsarea'

export default class App extends Component {
  render () {
    return <TagsArea placeholder="Write something" onSubmit={(tags) => console.log(tags)} />
  }
}
