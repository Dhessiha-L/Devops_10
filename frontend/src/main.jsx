import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const projects=[
{id:1,name:"Green Valley Residency",location:"Chennai",status:"Active",progress:72,budget:18.5},
{id:2,name:"Lakeview Towers",location:"Coimbatore",status:"Active",progress:48,budget:24},
{id:3,name:"Urban Heights",location:"Madurai",status:"Planning",progress:15,budget:12.8},
{id:4,name:"Palm Grove Villas",location:"Trichy",status:"Completed",progress:100,budget:9.6}
];

function App(){
const totalProjects=projects.length;
const activeProjects=projects.filter(p=>p.status==="Active").length;
const averageProgress=Math.round(projects.reduce((sum,p)=>sum+p.progress,0)/totalProjects);
const budgetUsed=64;

return(
<div className="dashboard">
<header className="header">
<h1>Real Estate Dashboard</h1>
<p>Project Management Overview</p>
</header>
<main className="container">
<section className="cards">
<div className="card"><h3>Active Projects</h3><h2>{activeProjects}</h2></div>
<div className="card"><h3>Total Projects</h3><h2>{totalProjects}</h2></div>
<div className="card"><h3>Average Progress</h3><h2>{averageProgress}%</h2></div>
<div className="card"><h3>Budget Used</h3><h2>{budgetUsed}%</h2></div>
</section>
<section className="projects">
<h2>Projects</h2>
<table>
<thead>
<tr>
<th>Project Name</th>
<th>Location</th>
<th>Status</th>
<th>Progress</th>
<th>Budget</th>
</tr>
</thead>
<tbody>
{projects.map(project=>(
<tr key={project.id}>
<td>{project.name}</td>
<td>{project.location}</td>
<td><span className={`status ${project.status.toLowerCase()}`}>{project.status}</span></td>
<td>
<div className="progress-container">
<div className="progress-bar">
<div className="progress" style={{width:`${project.progress}%`}}></div>
</div>
<span>{project.progress}%</span>
</div>
</td>
<td>{project.budget} Cr</td>
</tr>
))}
</tbody>
</table>
</section>
</main>
</div>
);
}

createRoot(document.getElementById("root")).render(
<React.StrictMode><App/></React.StrictMode>
);