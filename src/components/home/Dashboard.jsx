import React from 'react'
import './Dashboard.css'
import PieChart from './PieChart'

export const genderData = {
    labels: [],
    datasets: [
      {
        label: '% of Gender',
        data: [25, 75],
        backgroundColor: [
          'rgba(237, 231, 225, 0.2)',
          'rgba(237, 231, 225, 0.2)',
        ],
        borderColor: [
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  export const emplyomentData = {
    labels: [],
    datasets: [
      {
        label: '% of Employer',
        data: [49, 20, 31],
        backgroundColor: [
          'rgba(237, 231, 225, 0.2)',
          'rgba(237, 231, 225, 0.2)',
          'rgba(237, 231, 225, 0.2)',
        ],
        borderColor: [
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className='heading'>KEY PERFORMANCE INDICATORS</div>
        <div className='graph'>
            <div className='graphHeading'>GENDER</div>
            <div className='pieChart'><PieChart data={genderData}/></div>
            <div className='labels'>
                <table>
                    <tr>
                        <td style={{textAlign:'right'}}>TOTAL USERS</td>
                        <td>=</td>
                        <td>1024</td>
                    </tr>
                    <tr>
                        <td style={{textAlign:'right'}}>MALE</td>
                        <td>=</td>
                        <td>768</td>
                    </tr>
                    <tr>
                        <td style={{textAlign:'right'}}>FEMALE</td>
                        <td>=</td>
                        <td>256</td>
                    </tr>
                </table>
            </div>
        </div>
        <hr style={{marginLeft:"150px", marginRight:"150px"}}/>
        <hr style={{marginLeft:"50px", marginRight:"50px"}}/>
        <hr style={{marginLeft:"150px", marginRight:"150px"}}/>
        <div className='graph'>
            <div className='graphHeading'>EMPLYOMENT TYPE</div>
            <div className='pieChart'><PieChart data={emplyomentData}/></div>
            <div className='labels'>
                <table>
                    <tr>
                        <td style={{textAlign:'right'}}>TOTAL USERS</td>
                        <td>=</td>
                        <td>1024</td>
                    </tr>
                    <tr>
                        <td style={{textAlign:'right'}}>FULL TIME</td>
                        <td>=</td>
                        <td>205</td>
                    </tr>
                    <tr>
                        <td style={{textAlign:'right'}}>PART TIME</td>
                        <td>=</td>
                        <td>317</td>
                    </tr>
                    <tr>
                        <td style={{textAlign:'right'}}>DAILY WAGE</td>
                        <td>=</td>
                        <td>502</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Dashboard