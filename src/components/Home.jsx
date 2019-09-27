import React from 'react';
import Data from '../data/index';
import Board from './Board';

import 'semantic-ui-css/semantic.min.css';

const Home = () => <Board {...Data} />;

export default Home;
