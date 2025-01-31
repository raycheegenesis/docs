---
id: grid-pro-genesis-column
title: Grid Pro - Column
keywords: [web, web components, grid, grid pro, column]
tags:
    - web
    - web components
    - grid
    - grid pro
    - column
---

This is a `slotted` component that allows a more "visual approach" when defining columns. Each `grid-pro-column` takes a `ColDef` typed object. To check all the available fields for the variable type `coldef`, take a [look here](https://www.ag-grid.com/javascript-data-grid/column-properties/).

:::tip 
Customising column definitions using this approach is useful in **connected data** cases, where the data is dynamic, but there's still a need for extra definitions (e.g. events, transformers, etc).
:::

## Usage

We can define `ColDef` objects in different ways; in this example, it's being set in the context/component's own class:

```jsx title="ColDef array setting custom headerName and others"
public myMultipleCustomColumnConfigArray: ColDef[] = [
  {
    headerName: 'Country',
    field: 'country',
    // cellRenderer, etc
  },
  {
    headerName: 'Custom Year Header',
    field: 'year',
    width: 100,
    // cellRenderer, etc
  },
];
```

```jsx title="Two ColDef objects setting custom headerName and others"
public mySingleCustomColumnConfigObj: ColDef = [
  {
    headerName: 'Type',
    field: 'type',
    width: 50,
    // cellRenderer, etc
  },
];

public myOtherSingleCustomColumnConfigObj: ColDef = [
  {
    headerName: 'Counterparty Name',
    field: 'counterparty',
    // cellRenderer, etc
  },
];
```

When using `ColDef` objects, it's up to you to decide the approach. You can use the directive **repeat** to create an array of definitions, or you can create it one column at a time. 

```html title="Using the ColDef array of objects with an extra single object"
<foundation-grid-pro>
  ${repeat(x => x.myMultipleCustomColumnConfigArray, html`
    <grid-pro-column :definition=${x => x}></grid-pro-column>
  `)}

  <!-- You can also use a helper function to produce the same result as above -->
  <!-- The boolean parameter controls whether custom grid-pro-cell items are included; they are included by default -->
  ${gridProColumns(x => x.myMultipleCustomColumnConfigArray, false)}

  <grid-pro-column :definition=${x => x.mySingleCustomColumnConfigObj}></grid-pro-column>
  <grid-pro-column :definition=${x => x.myOtherSingleCustomColumnConfigObj}></grid-pro-column>

</foundation-grid-pro>
```
