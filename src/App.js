import React, { useEffect } from 'react';
import Popover from '@material-ui/core/PopOver';
import { makeStyles } from '@material-ui/core/styles';

import './style.css';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const mockData = {
  recLoadedCnt1: 3527,
  recLoadedCnt2: 352,
};

export default function App({ test }) {
  const [loading, setLoading] = React.useState(true);
  const [cycleSpecificCnt, setCycleSpecificCnt] = React.useState(test);

  useEffect(() => {
    console.log('useEffect enter');

    const data = async () => {
      console.log('data check...');
      if (loading) {
        const val = await getData();
        console.log('val...', val);
        setCycleSpecificCnt(val.data);
        setLoading(false);
      }
    };
    data();
  }, []);

  const getData = () => {
    const test = { ok: true, data: mockData };
    // console.log('data...', test);
    return new Promise((resolve) => {
      resolve(test);
    });
  };

  return (
    <div>
      <h3>Simple Mock Api</h3>
      <h4>CycleSpecific Count</h4>
      {loading ? 'loading' : cycleSpecificCnt && cycleSpecificCnt.recLoadedCnt1}
    </div>
  );
}
