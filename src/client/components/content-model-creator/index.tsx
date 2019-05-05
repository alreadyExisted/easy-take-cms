import { createContentModelsQuery, getContentModelsQuery } from 'client/queries'
import React, { Component } from 'react'
import { ChildMutateProps, graphql } from 'react-apollo'

class ContentModelCreatorComponent extends Component<ChildMutateProps<any>> {
  render() {
    return (
      <div>
        <button onClick={this.createContentModel}>1</button>
      </div>
    )
  }

  private createContentModel = () => {
    this.props.createContentModels({
      variables: {
        name: 'Test name',
        apiIdentifier: 'Test apiIdentifier',
        description: 'Test description'
      },
      refetchQueries: [{ query: getContentModelsQuery }]
    })
  }
}

// tslint:disable-next-line:variable-name
export const ContentModelCreator = graphql(createContentModelsQuery, {
  name: 'createContentModels'
})(ContentModelCreatorComponent)
