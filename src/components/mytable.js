import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {useEffect } from 'react';
import request from "request";


require("dotenv").config();

function MyTable (props) {

    const baseURL = "http://127.0.0.1:5000/"
    const invadeTeam = ['kinglouiev5', 'invade flymuf', 'paxity', 'invade obear']
    let rows = [];


    useEffect(()=>{
      let options = {
        url: "",
        json: true,
      };
      for ( var i in invadeTeam ) {
      options.url  = baseURL + (invadeTeam[i])
      console.log('len : ', invadeTeam.length, ' i: ', i)
      request.get(options, function (error, response, body) {
        rows.push(body);
        console.log('rows top after addition one >> ', rows)
      });
    }}, [])



    const columns = [
      { field: 'summName', headerName: 'Username', width: 130 },
      { field: 'summRank', headerName: 'Ranking', width: 130 },
    ];


return (
  <div style={{ height: 400, width: '100%' }}>
    <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
  </div>
  );
}

export default MyTable;
