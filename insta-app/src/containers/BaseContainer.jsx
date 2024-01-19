import React, { Component } from "react";

class BaseContainer extends Component {
  logSuccess(msg) {
    console.log(`Success: ${msg}`);
  }

  logError(msg) {
    console.log(`Error: ${msg}`);
  }

  logInfo(msg) {
    console.log(`Info: ${msg}`);
  }

  doneLoading() {
    console.log("Done loading");
  }
}

export default BaseContainer;
