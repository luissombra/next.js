import React, { Component } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import { withStyles } from 'material-ui/styles';
import withRoot from '../components/withRoot';

const styles = {
  root: {
    textAlign: 'center',
    paddingTop: 100,
  },
};


class About extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <Head>
          <title>{ this.props.title }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <header>
          <nav>
            <Link href='/'><a>Home</a></Link> |
            <Link href='/about'><a>About</a></Link> |
            <Link href='/contact'><a>Contact</a></Link>
          </nav>
        </header>

        { this.props.children }

        <footer>
          {'I`m here to stay'}
        </footer>
      </div>
    );
  }
}


export default withRoot(withStyles(styles)(About));




