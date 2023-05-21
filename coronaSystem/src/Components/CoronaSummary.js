
import { useEffect, useRef, useState } from 'react';
import axios from './Axios';
import Chart from 'chart.js/auto';
import handleGetAllPersons from './Manager'

export default function CoronaSummary()
{
    const [vaccinations,setAllVaccinations] = useState([]);
    const [totalPatients, setTotalPatients] = useState(0);
    const [activePatients, setActivePatients] = useState([]);
    const [allperson, setAllPerson] = useState([]);
    const chartRef = useRef(null);
    const [chart, setChart] = useState(null);
    const [activePatientsPerDay, setActivePatientsPerDay] = useState(Array(30).fill(0));
    const [monthi,setMonthi] = useState();

    useEffect(() => {
        const getData = async () => {
          const result = await handleGetAllPersons();
          setAllPerson(result);
        }
        getData();
      },[]);
      
    useEffect(() => {
        async function getPatientsPerDayLastMonth() {
            const today = new Date();
            const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
            const month = Array(30).fill(0);
            console.log(lastMonth.toLocaleString('default', { month: 'long' }))
            for(let i=0;i<12;i++)
                 month[i] = lastMonth.toLocaleString('default', { month: 'long' })+""+i+1;
            setMonthi(month);
            const result = await axios.get("/CoronaDetails/");
            console.log(result.data)
            setAllVaccinations((result))
            // console.log(vaccinations)
            // console.log(result.data)
            const patients = result.data.filter((v) => v.date_of_result != null);
            console.log(patients)
            const activePatients = patients.filter((v) => new Date(v.recovery_date) >= lastMonth);
            console.log(activePatients)
            const patientsPerDay = Array(30).fill(0);
            for (let i = 0; i < activePatients.length; i++) {
              const resultDate = new Date(activePatients[i].date_of_result);
              const recoveryDate = new Date(activePatients[i].recovery_date);
              console.log(resultDate)
              console.log(recoveryDate)
            //   for(let i = 0 ;i<activePatients.length;i++)
                //    patientsPerDay[(i.date_of_result.getMonth())++];
            //   if (recoveryDate >= lastMonth) {
                for (let j = lastMonth.getDate() - 1; j > recoveryDate.getDate(); j++) {
                  patientsPerDay[j]++;
                // }
              }
            }
            setActivePatientsPerDay(patientsPerDay);
            console.log(activePatientsPerDay)
          }
          getPatientsPerDayLastMonth();
          }, []);
       
        useEffect(() => {
            if (chart) {
              // Update the chart data
              chart.data.datasets[0].data = activePatients;
              chart.update();
            }
          }, [activePatients]);
        useEffect(() => {
            const myChartRef = chartRef.current.getContext('2d');
        
            // Destroy the previous Chart instance if it exists
            if (chart !== null) {
              chart.destroy();
            }
        
            // Create a new Chart instance
            const newChart = new Chart(myChartRef, {
              type: 'bar',
              data: {
                labels: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12'],
                
                // datasets: [
                //   {
                //     label: 'Active Patients',
                //     data: activePatients,
                //     backgroundColor: 'blue'
                //   }
                // ]
                datasets:[
                    {
                      label: 'Active Patients',
                      data: activePatientsPerDay,
                      backgroundColor: 'blue'
                    }
                  ]
              },
              options: {
                scales: {
                  y: {
                    beginAtZero: true
                  },
                  x: {
                    type: 'category'
                  }
                }
              }
            });
        
            // Store the new Chart instance in state
            setChart(newChart);
          },[]); 
      const zeroLengthVaccinations = allperson.length - vaccinations.length 
    
      return<>
      {/* <p>The number of members of the fund who are not vaccinated:{zeroLengthVaccinations}</p> */}
      <div>
      {/* <p>Total patients: {totalPatients}</p> */}
      <canvas ref={chartRef} width="400" height="150" />
    </div>
      </>
}
 // const today = new Date();
        // const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        // console.log(lastMonth);
        // const result = axios.get("/CoronaDetails/")
        // setAllVaccinations(result)
        // console.log(vaccinations)
        // const patients = result.data.filter((v) => v.date_of_result != null);
        // const activePatients = patients.filter((v) => new Date(v.recovery_date) >= lastMonth);
        // const patientsPerDay = Array(30).fill(0);
        // for (let i = 0; i < activePatients.length; i++) {
        //   const resultDate = new Date(activePatients[i].date_of_result);
        //   const recoveryDate = new Date(activePatients[i].recovery_date);
        //   if (recoveryDate >= lastMonth) {
        //     for (let j = lastMonth.getDate() - 1; j < recoveryDate.getDate(); j++) {
        //       patientsPerDay[j]++;
        //     }
        //   }
        // }
      
        // const getDatavaccinations = async () => {
        //      await axios.get("/CoronaDetails/")
        //     .then(response => {
        //         console.log("data "+response.data)
        //         setAllVaccinations(response.data);
        //   })
        //   .catch(error => {
        //     console.log(error);
        //   });
            // const total = vaccinations.filter((v) => v.date_of_result  null);
            // console.log(total)
            // setTotalPatients(total.length);
            // const total = vaccinations.label
            // setTotalPatients(total)
            // const active = Array(30).fill(0);
            // for (let i = 0; i < vaccinations.length; i++) {
            // const resultDate = new Date(vaccinations[i].date_of_result);
            // const recoveryDate = new Date(vaccinations[i].recovery_date);
            // console.log(recoveryDate)
            // if (recoveryDate >= lastMonth) {
            //     // Check if the patient was active on each day in the last month
            //     for (let j = lastMonth.getDate() - 1; j < recoveryDate.getDate(); j++) {
            //     active[j]++;
            //     }
            // }
            // }
            // setActivePatientsPerDay(active);
            // console.log(activePatientsPerDay)
            // const result = await axios.get("/CoronaDetails/")
            // setAllVaccinations(result);
            // const total = result.filter((v) => v.date_of_result != null);
            // setTotalPatients(total.length);
      
            // // Calculate the number of active patients for each month
            // const active = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            // for (let i = 0; i < total.length; i++) {
            //   const resultDate = new Date(total[i].date_of_result);
            //   const recoveryDate = new Date(total[i].recovery_date);
      
            //   // Check if the patient was active during each month
            //   for (let j = resultDate.getMonth(); j <= recoveryDate.getMonth(); j++) {
            //     active[j]++;
            //   }
            // }
            // setActivePatients(active);
        //   };
          
        //   getDatavaccinations();
        // }, []);
