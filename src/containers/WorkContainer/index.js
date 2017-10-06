import React from 'react';
import GridTile from '../../components/GridTile';
import { createClient } from 'contentful';
import { SPACE_ID, ACCESSTOKEN } from '../../constants';

class WorkContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleResourceClick = this.handleResourceClick.bind(this);
    this.client = createClient({
      space: SPACE_ID,
      accessToken: ACCESSTOKEN
    });
    this.state = {
      content: [],
      selectedWork: '',
      error: ''
    };
  }

  componentDidMount(){
    this.client.getEntries()
    .then((entry) => {
      this.setState ({ content: entry.items })
    })
  }

  handleResourceClick(e){
    console.log(e.target.id, 'workcontainer id');
  }

  render(props) {
    return (
      <div className="work-container outer">
        <div className="grid-area-container">
          {this.state.content.map(({ fields, sys }, index) => {
            return (
              <GridTile
                key={sys.id}
                id={fields.slug}
                title={fields.title}
                position={fields.position}
                slug={fields.slug}
                workSample={fields.workSample.fields.file.url}
                handleResourceClick={this.handleResourceClick}
              />
            );
          })}
        </div>
      </div>
    )
  };
};

export default WorkContainer;
