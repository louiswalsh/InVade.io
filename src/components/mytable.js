import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {useEffect } from 'react';
import request from "request";


require("dotenv").config();

function MyTable (props) {

    const baseURL = "http://127.0.0.1:5000/"
    const invadeTeam = [
      {name: 'kinglouiev5', id: 1},
      {name: 'paxity', id: 2 },
      {name: 'invade flymuf', id: 3  },
      {name: 'invade obear', id: 4 }
    ]
    let rows = React.useState([]);


    useEffect(()=>{
      let options = {
        url: "",
        json: true,
      };

      for ( var i in invadeTeam ) {
      options.url  = baseURL + (invadeTeam[i].name)
      let id = invadeTeam[i].id
      request.get(options, function (error, response, body) {
        body.id = id
        invadeTeam.find(x => x.id === id).rank = body.rank
        invadeTeam.find(x => x.id === id).ratio = body.ratio
        invadeTeam.find(x => x.id === id).wins = body.wins
        invadeTeam.find(x => x.id === id).losses = body.losses
        invadeTeam.find(x => x.id === id).lp = body.lp
        rows.push(body);
        console.log(rows)
      });
    }}, [])

    const columns = [
      { field: 'name', headerName: 'Username', width: 130 },
      { field: 'rank', headerName: 'Ranking', width: 130 },
      { field: 'ratio', headerName: 'W/L Ratio', width: 130 },
      { field: 'wins', headerName: 'Wins', width: 130 },
      { field: 'losses', headerName: 'Losses', width: 130 },
      { field: 'lp', headerName: 'LP', width: 60 },

    ];


return (
  <div style={{ height: 400, width: '100%' }}>
    <DataGrid rows={invadeTeam} columns={columns} pageSize={5} checkboxSelection />
  </div>
  );
}

export default MyTable;
