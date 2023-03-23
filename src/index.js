import React, { useEffect, useState } from "react";
import { render } from "react-dom";
//import { App as SendbirdApp } from "@sendbird/uikit-react";
import Chat from "./chat"
import reportWebVitals from './reportWebVitals';
import './index.css';

const APP_ID = "";
const USER_ID = "";

const root = document.getElementById("root");

render(
  <div className='app'>
      <Chat appId={APP_ID} userId={USER_ID} />
  </div>
, root);

reportWebVitals();
