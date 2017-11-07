import Layout from '../components/layout';
import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';

const styles = {
  root: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

class Contact extends Component {
  render() {
    return (
      <Layout title='Contact us'>
        <div>Contact</div>
      </Layout>
    );
  }
}

export default withRoot(withStyles(styles)(Contact));
