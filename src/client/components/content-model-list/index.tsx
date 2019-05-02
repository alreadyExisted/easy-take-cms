import { getContentModelsQuery } from 'client/queries'
import React, { Component } from 'react'
import { ChildProps, graphql } from 'react-apollo'
import { ContentModelData } from 'server/models/content-model'

interface Response {
  allContentModels: ContentModelData[]
}

class ContentModelListComponent extends Component<ChildProps<{}, Response>> {
  render() {
    return (
      <div>
        <ul id="book-list">{this.renderList()}</ul>
      </div>
    )
  }

  private renderList = () => {
    const { data } = this.props

    if (!data) return

    if (data.loading) return <div>Loading books...</div>
    else
      return (
        data.allContentModels &&
        data.allContentModels.map(contentModel => (
          <li key={contentModel.name}>
            Name: {contentModel.name}
            <br />
            Api identifier: {contentModel.apiIdentifier}
            <br />
            Description: {contentModel.description}
          </li>
        ))
      )
  }
}

// tslint:disable-next-line:variable-name
export const ContentModelList = graphql<{}, Response>(getContentModelsQuery)(
  ContentModelListComponent
)
