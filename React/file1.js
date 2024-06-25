const { useState, useEffect } = React;

const App = () => {
  const [emps, setemps] = useState([
    { id: 1, name: 'charvi', position: 'developer' }
  ]);

  const [name, setname] = useState('');
  const [position, setposition] = useState('');

  const addemp = () => {
    const newemp = {
      id: emps.length + 1,
      name: name,
      position: position
    };
    setemps([...emps, newemp]);
    setname('');
    setposition('');
  };

  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'employee management'),
    React.createElement(
      'ul',
      null,
      emps.map((emp) =>
        React.createElement('li', { key: emp.id }, `${emp.name} - ${emp.position}`)
      )
    ),
    React.createElement(
      'div',
      null,
      React.createElement('input', {
        type: 'text',
        placeholder: 'name',
        value: name,
        onChange: (e) => setname(e.target.value)
      }),
      React.createElement('input', {
        type: 'text',
        placeholder: 'position',
        value: position,
        onChange: (e) => setposition(e.target.value)
      }),
      React.createElement('button', { onClick: addemp }, 'add employee')
    )
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
