import React from 'react';
import GridTile from '../../components/GridTile';
import { createClient } from 'contentful';
import { SPACE_ID, ACCESSTOKEN } from '../../constants';

class WorkContainer extends React.Component {
  constructor(props) {
    super(props);

    this.client = createClient({
      space: SPACE_ID,
      accessToken: ACCESSTOKEN
    });
    this.state = {
      content: [],
      workSampleImage: '',
      error: ''
    };
  }

  componentDidMount(){
    this.client.getEntries()
    .then((entry) => {
      this.setState ({ content: entry.items })
    })
  }

  render(props) {
    console.log(this.state, 'state');
    return (
      <div className="work-container outer">
        <div className="grid-area-container">
          {this.state.content.map(({ fields, sys }, index) => {
            return (
              <GridTile
                key={sys.id}
                title={fields.title}
                position={fields.position}
                workSample={fields.position}
              />
            );
          })}
        </div>
      </div>
    )
  };
};

export default WorkContainer;
