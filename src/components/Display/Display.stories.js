import Display from './Display'

export default {
    component: Display
  };

  export const DisplayNumber = {
    args: {
      text: '1',
      className: 'display-number',
    }
  };

  export const DisplayWithoutTextNumber = {
    args: {
      text: ''
    }
  };

  export const DisplayLargeNumber = {
    args: {
      text: '999999999',
      className: 'display-number',
    }
  };

  export const DisplayText = {
    args: {
      text: 'ERROR',
      className: 'display-text'
    }
  };