import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";

var products = [{
  id: 1,
  name: "Product1",
  price: 120
}, {
  id: 2,
  name: "Product2",
  price: 80
}, {
  id: 3,
  name: "Product3",
  price: 100
}, {
  id: 4,
  name: "Product4",
  price: 110
}, {
  id: 5,
  name: "Product5",
  price: 130
}, {
  id: 6,
  name: "Product6",
  price: 140
}, {
  id: 7,
  name: "Product7",
  price: 150
}, {
  id: 8,
  name: "Product8",
  price: 160
}, {
  id: 9,
  name: "Product9",
  price: 170
}, {
  id: 10,
  name: "Product10",
  price: 180
}, {
  id: 11,
  name: "Product11",
  price: 190
}, {
  id: 12,
  name: "Product12",
  price: 200
}, {
  id: 13,
  name: "Produc13",
  price: 210
}, {
  id: 14,
  name: "Product14",
  price: 220
}, {
  id: 15,
  name: "Product15",
  price: 230
}, {
  id: 16,
  name: "Product16",
  price: 240
}, {
  id: 17,
  name: "Product17",
  price: 250
}, {
  id: 18,
  name: "Product18",
  price: 260
}, {
  id: 19,
  name: "Product19",
  price: 270
}, {
  id: 20,
  name: "Product20",
  price: 280
}, {
  id: 21,
  name: "Product21",
  price: 290
}, {
  id: 22,
  name: "Product22",
  price: 300
}, {
  id: 23,
  name: "Product23",
  price: 310
}, {
  id: 24,
  name: "Product24",
  price: 320
}];

class Table extends Component {
  createCustomToolBar = props => {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 left-pull">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 right-pull padding0">
        { props.components.btnGroup }
        </div>        
        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-4 tableSearch left-pull'>
          { props.components.searchPanel }
        </div>
      </div>
    );
  }

  render() {
    const selectRow = {
      mode: 'checkbox',
      showOnlySelected: false
    };    
    const options = {
      toolBar: this.createCustomToolBar
    };
    return (
      <BootstrapTable data={ products }
        options={ options }
        selectRow={ selectRow }
        insertRow
        deleteRow
        pagination        
        search>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
export default Table;