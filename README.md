# tagsarea

> A textarea-resembling interface to write posts in form of separated tags

![Alt Text](tagsarea.gif)

[![NPM](https://img.shields.io/npm/v/tagsarea.svg)](https://www.npmjs.com/package/tagsarea) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save tagsarea
```

or

```bash
yarn install tagsarea
```

## Usage

```jsx
import React, { Component } from 'react'

import TagsArea from 'tagsarea'

export default class App extends Component {
  render () {
    return <TagsArea placeholder="Write something" onSubmit={(tags) => console.log(tags)} />
  }
}
```

## Customization

Element supports customization through the use of `react-jss` styled components.
Available classes: `caret`, `tagsarea`, `tag`.
(Example TBA)

## License

MIT © [optimista](https://github.com/optimista)
