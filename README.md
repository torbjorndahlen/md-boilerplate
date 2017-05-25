# md-boilerplate
Designing user friendly, nice looking and responsive user interfaces is a challenging and time consuming task.
In this demo I have used Angular Materal (below refered to as AM) and created a foundation which makes it simple to quickly build responsive user interfaces for use with Red Hat MAP. The design is primarily intended for B2E apps, but could
certainly also be used for business related B2C apps.
To make it easier to see the structure of the user interface elements, I have added a class with a different border color
to the different modules as follows:
`Red: Main view`
`Dark Green`: Toolbar
`Green: Sidenav`
`Magenta: Analytics`
`Yellow: Card, List, Form` These three are mutually exclusive.
The different components can be shown or hidden by changing a corresponding scope variable in `view.controller.js`.
This simplifies debugging problems in the layout.

## Layout
The layout framework in AM is based on rows and columns and the layout attribute is applied to the parent container.
For example a `<div layout="row">` will make all child elements align in a row. In addition there are several alignment
attributes that is applied to the parent container and will affect the child elements (examples).
### View Layout
The View component is the parent component to the other components. It has a column layout with the layout-fill attribute
which makes its child elements horizontally fill the space created by the parent.

![alt text](./img/view-layout.png "View Layout")

The topmost element in the View component consists of two immediate children: one for the toolbar and one for the remaining
elements. Both children contain the flex attribute.
The `flex`attribute is applied to the child elements to make them stretch horizontally in the space created by the parent.
Aligning elements in a row depends on this when the with of the display changes.
The component containing the remaining components (Sidenav, Analytics, List, Form, Card) has a row layout for gt-md screen sizes. This is since the Sidenav stays open at that size and another component need to be able to sit to the right of
it.

![alt text](./img/gt-md-row-layout.png "Row Layout")

#### The toolbar
The toolbar component has a row layout and consists of an md-toolbar element and an image where a company logo can be placed.
For screen sizes < 600px the layout changes to column.

![alt text](./img/toolbar.png "Toolbar")

####
