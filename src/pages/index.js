import React, { Component } from "react";
import SEO from "../components/SEO";
import "minireset.css";
import MainHeader from '../components/MainHeader';

export default class Index extends Component {
  render() {
    return (
      <>
        <SEO />
        <MainHeader />
      </>
    );
  }
}
