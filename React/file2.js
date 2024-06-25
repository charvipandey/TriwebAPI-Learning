const { useState } = React;

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');

  const calculateResult = () => {
    let res = 0;
    switch (operator) {
      case '+':
        res = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        res = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        res = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        res = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        break;
    }
    setResult(res);
  };

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const handleCalculate = () => {
    calculateResult();
  };

  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Simple Calculator'),
    React.createElement('input', {
      type: 'number',
      placeholder: 'Enter number 1',
      value: num1,
      onChange: handleNum1Change,
    }),
    React.createElement(
      'select',
      {
        value: operator,
        onChange: handleOperatorChange,
      },
      React.createElement('option', { value: '+' }, '+'),
      React.createElement('option', { value: '-' }, '-'),
      React.createElement('option', { value: '*' }, '*'),
      React.createElement('option', { value: '/' }, '/'),
    ),
    React.createElement('input', {
      type: 'number',
      placeholder: 'Enter number 2',
      value: num2,
      onChange: handleNum2Change,
    }),
    React.createElement(
      'button',
      {
        onClick: handleCalculate,
      },
      '=',
    ),
    React.createElement('p', null, 'Result: ' + result),
  );
};

ReactDOM.render(React.createElement(Calculator), document.getElementById('root'));