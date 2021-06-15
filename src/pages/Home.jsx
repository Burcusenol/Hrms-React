import React, { Component } from 'react'
import DataTable from '../layouts/DataTable'
import Filter from '../layouts/Filter'
export default class Home extends Component {
    render() {
        return (
            <div>
               <Filter/>
               <DataTable/>
               
            </div>
        )
    }
}
