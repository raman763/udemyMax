import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expense =[
    {title:"car",amount:443,date:new Date(2022,6,21)},
    {title:"car",amount:443,date:new Date(2022,6,21)},
    {title:"car",amount:443,date:new Date(2022,6,21)},
    {title:"car",amount:443,date:new Date(2022,6,21)}
  ]

  return (
    <div className="App">
      <ExpenseItem expense={expense}/>
    </div>
  );
}

export default App;
