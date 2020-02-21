import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import '../App.css'
class Chart extends Component{
    constructor(props){
      super(props);
      this.state={
        chartData:{
          labels: ['Turnover', 'Stress', 'Job staisfaction'],
          datasets:[
            {
              label:'',
              data:
              
              [ 
                50,
                35,
                68,
                0
              ],
              backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
              ]
            }
          ]
        }
      }
    }
  
    static defaultProps = {
      
    }
  
    render(){
      console.log(this.state.chartData)
      return (
        <div>
        <section id="boxes" class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-3 ">
              <div class="card text-center shadow bg-white rounded">
                 <div>
                    <img src="https://cdn1.iconfinder.com/data/icons/2019-social-media/512/social_media-03-128.png" class="rounded float-right" />
                 </div>
                <div class="card-body">
                  <h6 class=" text-left">Engagement</h6>
                  <h3  class="text-left" style={{color:'green'}}>75%</h3>
                  <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar" style={{ width: "75%"}} ></div>
                 </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
            <div class="card text-center shadow bg-white rounded">
            <div>
                    <img src="https://cdn1.iconfinder.com/data/icons/2019-social-media/512/social_media-07-128.png" class="rounded float-right" />
                 </div>
                <div class="card-body">
                  <h6 class="text-left">well being</h6>
                  <h3  class="text-left" style={{color:'rgba(54, 162, 235, 0.6)'}}>45%</h3>
                  <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: "45%",background:'rgba(54, 162, 235, 0.6)'}} ></div>
                 </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
            <div class="card text-center shadow bg-white rounded">
            <div>
                    <img src="https://cdn1.iconfinder.com/data/icons/2019-social-media/512/social_media-07-128.png" class="rounded float-right" />
                 </div>
                <div class="card-body">
                  <h6 class="text-left">Turn over</h6>
                  <h3  class="text-left" style={{color:'rgba(255, 99, 132, 0.6)'}}>75%</h3>
                  <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: "75%",background:'rgba(255, 99, 132, 0.6)'}} ></div>
                 </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
            <div class="card text-center shadow bg-white rounded">
            <div>
                    <img src="https://cdn1.iconfinder.com/data/icons/2019-social-media/512/social_media-05-128.png" class="rounded float-right" />
                 </div>
                <div class="card-body">
                  <h6 class="text-left">Stress</h6>
                  <h3  class="text-left">85%</h3>
                  <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: "85%"}} ></div>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
          <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 ">
          <h2 className="text-left">Celebrate</h2>
        <div class="card shadow bg-white rounded" style={{width: '30rem'}}>
            <div class="card-body">
            <p class="alignleft">Feedback</p>
            <p class="alignright">50%</p>
            <div class="progress alginclear">
                        <div class="progress-bar bg-success" role="progressbar" style={{ width: "25%"}} ></div>
                 </div>
            </div>
            <div class="card-body">
            <p class="alignleft">Emotioanl wellbeing</p>
            <p class="alignright">35%</p>
                <div class="progress alginclear">
                <div class="progress-bar" role="progressbar" style={{ width: "45%",background:'rgba(54, 162, 235, 0.6)'}} ></div>
                 </div>
            </div>
            <div class="card-body">
            <p class="alignleft">Peer support</p>
            <p class="alignright">68%</p>
                <div class="progress alginclear">
                        <div class="progress-bar " role="progressbar" style={{ width: "68%"}} ></div>
                 </div>
            </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-12">
        <h2 className="text-left">Focus On</h2>
                <div className="shadow bg-white rounded">
                <Bar
                    data={this.state.chartData}
                    options={{
                    title:{
                        display:this.props.displayTitle,
                        fontSize:15
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                    }
                    }}
                />
                </div>
        </div>
      </div>
    </div>
      </section>
      </div>
       
      )
    }
  }
  
  export default Chart;