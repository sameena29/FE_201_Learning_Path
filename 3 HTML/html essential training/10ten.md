## Tables

**The whole point of semantic html elements is to tell the browser what you have. So if u have a table then use table, if u have a button then use button. Do not interchange.**

- Earlier people used to take their content and break it into tiny pieaces of their content and jam into the cells of an html table.
- But this makes content inaccessible, non-reusabel, non-findable.
- As a layman's hint: Use table in cases where you would switch from google docs to google sheets.(I don;t think this is relavant though)
- Html email is one example where tables are being used in a wrong way (according to the author atleast).

## Format :

- The `table` element wraps around the whole table, around all our content and markup for that table, marking the beginning and end of the table itself.
- The `tr` element stands for table row. It wraps around a set of elements, defining them as belonging to the same row.
- The `th` element stands for table header. It defines a header for a column, and the
- `td` element stands for table data. It marks up the cells of data.

```
<table class="styled">
  <tr>
    <th>Bird</th>
    <th>Color</th>
    <th>Diet</th>
    <th>Photo</th>
  </tr>
  <tr>
    <td>American Goldfinch</td>
    <td>yellow</td>
    <td>Mostly seeds.</td>
    <td><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/american-goldfinch.jpg" alt="american-goldfinch" width="360" height="261" ></td>
  </tr>
  <tr>
    <td>Bluejay</td>
    <td>blue</td>
    <td>Omnivorous.</td>
    <td><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/blue-jay.jpg" alt="" width="360" height="529" ></td>
  </tr>
  <tr>
    <td>Indigo Bunting</td>
    <td>blue</td>
    <td>Mostly seeds and insects.</td>
    <td><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/indigo-bunting.jpg" alt="" width="360" height="255" ></td>
  </tr>
  <tr>
    <td>Northern Cardinal</td>
    <td>red</td>
    <td>Seeds, insects, berries.</td>
    <td><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/northern-cardinal.jpg" alt="" width="360" height="240" ></td>
  </tr>
  <tr>
    <td>Tufted Titmouse</td>
    <td>grey</td>
    <td>Mostly insects.</td>
    <td><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/tufted-titmouse.jpg" alt="" width="360" height="531" ></td>
  </tr>
</table>
```
