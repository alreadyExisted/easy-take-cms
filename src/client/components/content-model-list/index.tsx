import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getContentModelsQuery } from 'client/queries'

class ContentModelListComponent extends Component<any> {
  render() {
    return (
      <div>
        <ul id="book-list">{this.renderList()}</ul>
      </div>
    )
  }

  private renderList = () => {
    const { data } = this.props
    if (data.loading)
      return <div>Loading books...</div>
    else
      return 1
  }
}

export const ContentModelList = graphql(getContentModelsQuery)(
  ContentModelListComponent
)
