import './App.css';

function App() {
  let data=[{src:"https://th.bing.com/th/id/OIP.e1KNYwnuhNwNj7_-98yTRwHaF7?w=269&h=215&c=7&o=5&dpr=1.12&pid=1.7",
  title:"User1",
  desc:"Web Devloper"},
  {src:"https://th.bing.com/th/id/OIP.rbh3pjJkk9bgCUSoKeLbaQHaEJ?w=329&h=185&c=7&o=5&dpr=1.12&pid=1.7",
  title:"User2",
  desc:"software Devloper"},
  {src:"https://th.bing.com/th/id/OIP.0MxBa3jUdDDindjmEH2rnAHaFj?w=230&h=180&c=7&o=5&dpr=1.12&pid=1.7",
  title:"User3",
  desc:"PHP Devloper"},
  {src:"https://th.bing.com/th/id/OIP.BcbaQlvlYR5FbbYWp10vnwHaET?w=294&h=180&c=7&o=5&dpr=1.12&pid=1.7",
  title:"User4",
  desc:"system engineer"},
  {src:"https://th.bing.com/th/id/OIP.7n0Ts0oqvP8ZXcT6Wd83QAHaE7?w=298&h=199&c=7&o=5&dpr=1.12&pid=1.7",
  title:"User5",
  desc:"Web Devloper"}]
  return (
    <div>
        <div className="header">
        <h1>Person Details</h1></div>
        <div className="container">
          {
            data.map((val,index)=>
        <div className="card">
            <div className="card-img">
               <img src={val.src} className="card-image" alt="img"/>
            </div>
            <h1 className="card-title">{val.title}</h1>
            <p className="card-desc">
                {val.desc}
            </p>
            <p className="btn-parent">
                <button className="card-btn">
                    Read More
                </button>
            </p>
        </div>
            )
          }
        </div>
    </div>
  );
}

export default App;
