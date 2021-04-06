import React, { PureComponent } from 'react';
//import { Link } from 'react-router-dom';
import { Area, Line, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ComposedChart } from 'recharts';
//import axios from 'axios';

/*const CourseStuff = props => (
    <tr>
      <td>{props.detail.name}</td> //adding the following information to the course
      <td>{props.detail.course_id}</td>
      <td>{props.detail.instructor}</td>
      <td>{props.detail.aplus}</td>
      <td>{props.detail.a}</td>
      <td>{props.detail.aminus}</td>
      <td>{props.detail.bplus}</td>
      <td>{props.detail.b}</td>
      <td>{props.detail.bminus}</td>
      <td>{props.detail.cplus}</td>
      <td>{props.detail.c}</td>
      <td>{props.detail.cminus}</td>
      <td>{props.detail.dplus}</td>
      <td>{props.detail.d}</td>
      <td>{props.detail.dminus}</td>
      <td>{props.detail.fplus}</td>
      <td>{props.detail.I}</td>
      <td>{props.detail.P}</td>
      <td>{props.detail.NP}</td>
      <td>{props.detail.Y}</td>
      <td>{props.detail.quarter}</td>
    </tr>
  )*/
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

/*export default class CourseInfo extends Component{
    constructor(props) {
        super(props);

        this.state = {
            name: 'Computer Architecture',
            course_id: 'ECS150',
            instructor: '',
            aplus: 20,
            a: 10,
            aminus: 19,
            bplus: 12,
            b: 20,
            bminus: 10,
            cplus: 6,
            c: 3,
            cminus: 1,
            dplus: 2,
            d: 4,
            dminus: 0,
            f: 1,
            I: 1,
            P: 2,
            NP: 2,
            Y: 0,
            quarter: 'FQ2020'
        }
    }*/

    export default class Example extends PureComponent {
        static demoUrl = 'https://codesandbox.io/s/tiny-bar-chart-35meb';
      
        render() {
          return (
            <div style={{ width: 500, height: 300 }}>
				<ResponsiveContainer>
					<ComposedChart
						width={500}
						height={400}
						data={data}
						margin={{
							top: 20, right: 20, bottom: 20, left: 20,
						}}
					>
						<CartesianGrid stroke="#f5f5f5" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						{/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
						  <Bar dataKey="pv" barSize={20} fill="#413ea0" />
						{/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
					</ComposedChart>
				</ResponsiveContainer>
			</div>
          );
        }
      }
      