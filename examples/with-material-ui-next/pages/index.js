/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Layout from '../components/layout';

class Home extends Component {
  state = {
    open: false,
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    return (
      <Layout title='About us'>

          <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
            <DialogTitle>Super Secret Password</DialogTitle>
            <DialogContent>
              <DialogContentText>1-2-3-4-5</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={this.handleRequestClose}>
                OK
              </Button>
            </DialogActions>
          </Dialog>
          <Typography type="display1" gutterBottom>
            Material-UI
          </Typography>
          <Typography type="subheading" gutterBottom>
            example project
          </Typography>
          <Button raised color="accent" onClick={this.handleClick}>
            Super Secret Password
          </Button>

      </Layout>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Home;
