
import React from 'react'
import { VueInReact } from 'vuera'
import VueTemplate from './template.vue'

class HomepagePreview extends React.Component {
  componentDidCatch() {
    this.forceUpdate()
  }
  render() {
    const Component = VueInReact(VueTemplate)
    const entry = this.props.entry
    return (
      React.createElement('div', {},
        React.createElement(
          Component,
          {
            title: entry.getIn(['data', 'title']),
            subtitle: entry.getIn(['data', 'subtitle']),
            links: this.props.widgetsFor('links').map(function (link) {
              return {
                label: link.getIn(['data', 'label']),
                href: link.getIn(['data', 'href'])
              }
            }),
            html: entry.getIn(['data', 'body'])
          }
        )
      )
    )
  }
}

export default HomepagePreview
