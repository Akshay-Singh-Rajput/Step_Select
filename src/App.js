import './App.css';
import ObjectBase from './components/ObjectBase';
import ArrBase from './components/ArrBase';
import SubandscoreinArrBase from './components/SubandscoreinArrBase';

/* 
 Data Sample pattern
 1. ObjectBase

  Science: {
        stName: "Science",
        subject: {
            Physics: 10,
            Chemistry: 20,
            Biology: 30,
            Mathematics: 40,
            English: 50,
        },
    },

    2. ArrayBased
     {
        stName: "Science",
        subject: {
            Physics: 10,
            Chemistry: 20,
            Biology: 30,
            Mathematics: 40,
            English: 50,
        },
    },

    3. Array pattern
        {
        stName: "Science",
        subject: [ "Physics", "Chemistry", "Biology", "Mathematics", "English" ],
        scores: [ 10, 20, 30, 40, 50 ],
    },

*/

function App() {
  return (
    <div className="App">
      <h3>1st case</h3>
      <ObjectBase />


      <h3>2nd Case</h3>
      <ArrBase />


      <h3>3rd Case</h3>
      <SubandscoreinArrBase />
    </div>

  );
}

export default App;
