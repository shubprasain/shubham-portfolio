import React, {useState} from 'react';

interface Student {
    name:string;
    age:number;
    year:number
  }

export const Filtering = () => {

    const [searchText,setSearchText] = useState("");
    const [sort,setSort] = useState("name");
  
    const students : Student[] = [
      {name:"Jan",age:20,year:1},
      {name:"Jari",age:21,year:2},
      {name:"John",age:20,year:1},
      {name:"Mo",age:23,year:3},
      {name:"Hari",age:21,year:1},
      {name : "Denis",age:25,year:3}
  
    ];
  
    students.sort((a,b) => {
      if (sort === "name") {
        return a.name.localeCompare(b.name);
      } else if (sort === "age") {
        return a.age - b.age;
  
      } else if (sort === "year") {
        return a.year - b.year;
      }
      return 0;
    })
  return (
  <div>
    <div>
      <label>Search: <input type="text" value={searchText}  onChange={(event) => setSearchText(event.target.value)}/>
      </label>
      
    </div>
    <table>
     <thead>
      <tr>
        <th style={{fontWeight: sort === "name" ? "bold" : "normal"}} onClick={() => setSort("name")}>Name</th>
        <th  style={{fontWeight: sort === "age" ? "bold" : "normal"}}  onClick={() => setSort("age")}>Age</th>
        <th  style={{fontWeight: sort === "year" ? "bold" : "normal"}}  onClick={() => setSort("year")}>Year</th>
      </tr>
     </thead>
     <tbody>
      {
        students.filter(students => students.name.toUpperCase().startsWith(searchText.toUpperCase())).map(students => (
          <tr>
            <td>{students.name}</td>
            <td>{students.age}</td>
            <td>{students.year}</td>
          </tr>
        ))
      }
     </tbody>
    </table>
  </div>
  );
  }
  
  function App() {
    return (
   <Filtering/>
    );
  }
  

