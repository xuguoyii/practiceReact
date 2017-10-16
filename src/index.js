import React from 'react';
import ReactDOM from 'react-dom';
require('./assets/less/main.less');
import 'antd/dist/antd.css';
import Greeter from './components/Greeter';




ReactDOM.render(<Greeter />, document.getElementById('root'));
