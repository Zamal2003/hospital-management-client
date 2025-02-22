import{q as g,r as m,j as e}from"./index-pa_thSCV.js";import{C as c,a as r}from"./CRow-C3S0_Vw6.js";import{C as E,a as D}from"./CCardBody-GxEf9Cn3.js";import{C as b}from"./CCardHeader-DlNUx34W.js";import{C as f}from"./CForm-NXa-OVrg.js";import{C as s}from"./CFormLabel-CMaJqg25.js";import{C as n}from"./CFormInput-DIoOgNae.js";import{C as T}from"./CFormSelect-BnKiXsSP.js";import{C as F}from"./CFormTextarea-By3_EK4u.js";import{a as N}from"./index.esm-Dz0yT19O.js";import{C as R,a as w,b as u,c as i,d as I,e as d}from"./CTable-5Z20koPP.js";import"./CFormControlWrapper-DllR3RVu.js";import"./CFormControlValidation-D9fpJgZl.js";const K=()=>{const j=g();m.useEffect(()=>{localStorage.getItem("token")||j("/login")},[j]);const[t,p]=m.useState({employeeId:"",employeeName:"",basicSalary:"",allowances:"",deductions:"",totalSalary:"",leaveType:"",leaveStartDate:"",leaveEndDate:"",leaveReason:""}),[C,h]=m.useState([]),[L,k]=m.useState([]);m.useEffect(()=>{const l=localStorage.getItem("token");fetch("https://hospital-management-server-nu.vercel.app/api/payroll-leave",{method:"GET",headers:{Authorization:`Bearer ${l}`}}).then(a=>a.json()).then(a=>{a&&Array.isArray(a)?h(a):h([])}).catch(a=>{console.error("Error fetching payroll records:",a),h([])})},[]);const o=l=>{const{name:a,value:x}=l.target;p(v=>({...v,[a]:x}))},y=()=>{const l=parseFloat(t.basicSalary||0)+parseFloat(t.allowances||0)-parseFloat(t.deductions||0);p(a=>({...a,totalSalary:l.toFixed(2)}))},S=async()=>{const l=localStorage.getItem("token");try{const a=await fetch("https://hospital-management-server-nu.vercel.app/api/payroll-leave",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`},body:JSON.stringify(t)});if(a.ok){const x=await a.json();h(v=>[...v,x.data]),p({employeeId:"",employeeName:"",basicSalary:"",allowances:"",deductions:"",totalSalary:"",leaveType:"",leaveStartDate:"",leaveEndDate:"",leaveReason:""})}else alert("Error saving payroll and leave record")}catch(a){console.error("Error submitting payroll leave details:",a),alert("An error occurred while saving the record")}};return e.jsx(c,{children:e.jsx(r,{xs:12,children:e.jsxs(E,{className:"mb-4",children:[e.jsx(b,{children:e.jsx("strong",{children:"Payroll and Leave Management"})}),e.jsxs(D,{children:[e.jsxs(f,{children:[e.jsxs(c,{children:[e.jsxs(r,{md:6,children:[e.jsx(s,{htmlFor:"employeeId",children:"Employee ID"}),e.jsx(n,{type:"text",id:"employeeId",name:"employeeId",value:t.employeeId,onChange:o,placeholder:"Enter employee ID"})]}),e.jsxs(r,{md:6,children:[e.jsx(s,{htmlFor:"employeeName",children:"Employee Name"}),e.jsx(n,{type:"text",id:"employeeName",name:"employeeName",value:t.employeeName,onChange:o,placeholder:"Enter employee name"})]})]}),e.jsxs(c,{className:"mt-3",children:[e.jsxs(r,{md:4,children:[e.jsx(s,{htmlFor:"basicSalary",children:"Basic Salary"}),e.jsx(n,{type:"number",id:"basicSalary",name:"basicSalary",value:t.basicSalary,onChange:o,placeholder:"Enter basic salary",onBlur:y})]}),e.jsxs(r,{md:4,children:[e.jsx(s,{htmlFor:"allowances",children:"Allowances"}),e.jsx(n,{type:"number",id:"allowances",name:"allowances",value:t.allowances,onChange:o,placeholder:"Enter allowances",onBlur:y})]}),e.jsxs(r,{md:4,children:[e.jsx(s,{htmlFor:"deductions",children:"Deductions"}),e.jsx(n,{type:"number",id:"deductions",name:"deductions",value:t.deductions,onChange:o,placeholder:"Enter deductions",onBlur:y})]})]}),e.jsx(c,{className:"mt-3",children:e.jsxs(r,{md:6,children:[e.jsx(s,{htmlFor:"totalSalary",children:"Total Salary"}),e.jsx(n,{type:"text",id:"totalSalary",name:"totalSalary",value:t.totalSalary,disabled:!0,placeholder:"Calculated total salary"})]})}),e.jsxs(c,{className:"mt-3",children:[e.jsxs(r,{md:4,children:[e.jsx(s,{htmlFor:"leaveType",children:"Leave Type"}),e.jsxs(T,{id:"leaveType",name:"leaveType",value:t.leaveType,onChange:o,children:[e.jsx("option",{value:"",children:"Select Leave Type"}),e.jsx("option",{value:"sick",children:"Sick Leave"}),e.jsx("option",{value:"vacation",children:"Vacation Leave"}),e.jsx("option",{value:"maternity",children:"Maternity Leave"}),e.jsx("option",{value:"unpaid",children:"Unpaid Leave"})]})]}),e.jsxs(r,{md:4,children:[e.jsx(s,{htmlFor:"leaveStartDate",children:"Leave Start Date"}),e.jsx(n,{type:"date",id:"leaveStartDate",name:"leaveStartDate",value:t.leaveStartDate,onChange:o})]}),e.jsxs(r,{md:4,children:[e.jsx(s,{htmlFor:"leaveEndDate",children:"Leave End Date"}),e.jsx(n,{type:"date",id:"leaveEndDate",name:"leaveEndDate",value:t.leaveEndDate,onChange:o})]})]}),e.jsx(c,{className:"mt-3",children:e.jsxs(r,{md:12,children:[e.jsx(s,{htmlFor:"leaveReason",children:"Leave Reason"}),e.jsx(F,{id:"leaveReason",name:"leaveReason",value:t.leaveReason,onChange:o,rows:"3",placeholder:"Enter reason for leave"})]})}),e.jsx(c,{className:"mt-4",children:e.jsx(r,{md:2,children:e.jsx(N,{color:"primary",onClick:S,children:"Save Record"})})})]}),e.jsxs(R,{hover:!0,striped:!0,className:"mt-4",children:[e.jsx(w,{children:e.jsxs(u,{children:[e.jsx(i,{children:"Employee ID"}),e.jsx(i,{children:"Employee Name"}),e.jsx(i,{children:"Total Salary"}),e.jsx(i,{children:"Leave Type"}),e.jsx(i,{children:"Leave Dates"}),e.jsx(i,{children:"Reason"})]})}),e.jsx(I,{children:C.map((l,a)=>e.jsxs(u,{children:[e.jsx(d,{children:l.employeeId}),e.jsx(d,{children:l.employeeName}),e.jsx(d,{children:l.totalSalary}),e.jsx(d,{children:l.leaveType}),e.jsxs(d,{children:[l.leaveStartDate," to ",l.leaveEndDate]}),e.jsx(d,{children:l.leaveReason})]},a))})]})]})]})})})};export{K as default};
