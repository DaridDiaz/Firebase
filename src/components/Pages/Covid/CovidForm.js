function CovidListItem({confirmed, code, recovered, country, deaths, lastChange, lastUpdate}){
    
      return (
        <li className="flex my-6 justify-between border-b-2 border-indigo-400">
            <span className="ml-4">{code}</span>
            <span className="ml-4">{country}</span>
            <span className="ml-4">{confirmed}</span>
            <span className="ml-4">{recovered}</span>
            <span className="ml-4">{deaths}</span>
            <span className="ml-4">{lastChange}</span>
            <span className="ml-4">{lastUpdate}</span>
            <div className="flex">
            </div>
        </li>
      );
    
}

function CovidList({cvd}){
    const covidItems = cvd.map((o)=>{
      return (
        <CovidListItem
          country={o.country}
          code={o.code}
          confirmed={o.confirmed}
          recovered={o.recovered}
          deaths={o.deaths}
          fb_id={o.fb_id}
          lastChange={o.lastChange}
          lastUpdate={o.lastUpdate}
        />
      )
    });
    return (
      <section className="TodoList">
        <ul>
           
                {covidItems}
          
        </ul>
      </section>
    );
  }

export default CovidList;