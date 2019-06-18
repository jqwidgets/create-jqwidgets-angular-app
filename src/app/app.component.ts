import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public source: jqwidgets.GridSource = {
    datatype: 'xml',
    datafields: [
      { name: 'ProductName', type: 'string' },
      { name: 'QuantityPerUnit', type: 'int' },
      { name: 'UnitPrice', type: 'float' },
      { name: 'UnitsInStock', type: 'float' },
      { name: 'Discontinued', type: 'bool' }
    ],
    root: 'Products',
    record: 'Product',
    id: 'ProductID',
    url: './../assets/products.xml'
  };

  public dataAdapter = new jqx.dataAdapter(this.source);

  public columns: jqwidgets.GridColumn[] = [
    { text: 'Product Name', datafield: 'ProductName', width: 250 },
    { text: 'Quantity per Unit', datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right' },
    { text: 'Unit Price', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2' },
    { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', width: 100 },
    { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued', align: 'center' }
  ];
}
