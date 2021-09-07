import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import useStyles from '../css/scriptCSS';


const Table1 = (props) => {
    const classes = useStyles();
    var rows = [];
    var getLocalStorage = localStorage.getItem("User Data");
    getLocalStorage == null ? rows = [] : rows = JSON.parse(getLocalStorage);

    return (
        <div >
            <TableContainer component={Paper} style={{
                marginRight: "20px", marginBottom: "40px"
            }} >
                <Table className={classes.table} aria-label="simple table">
                    <TableHead style={{ background: 'lightgrey' }}>
                        <TableRow>
                            <TableCell>
                                <input type="checkbox" className={classes.checkBox} id="checkBox" onClick={props.toggle} />
                            </TableCell>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Gender</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Images</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {rows.map((row) => (
                            <TableRow key={row.id} id={row.id}>
                                <TableCell component="td" scope="row"><input type="checkbox" id={row.id} className={classes.checkBox} value={row.id} onClick={props.setChecked}/></TableCell>
                                <TableCell style={{ color: 'blue' }} component="th" scope="row" id={`id${row.id}`}>{row.id}</TableCell>
                                <TableCell style={{ color: 'blue' }} align="right" id={`fn${row.id}`}>{row.firstName}</TableCell>
                                <TableCell style={{ color: 'blue' }} align="right" id={`ln${row.id}`}>{row.lastName} </TableCell>
                                <TableCell style={{ color: 'blue' }} align="right" id={`g${row.id}`}>{row.gender}</TableCell>
                                <TableCell style={{ color: 'blue' }} align="right" id={`e${row.id}`}>{row.email}</TableCell>
                                <TableCell align="right" ><img id={`img${row.id}`} src={row.imageURL} alt={`profile pic of ${row.firstName}`} style={{ width: 60 }} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
            <Button className={classes.delButton} onClick={props.deleteBtn}>Delete</Button>
            <Button className={classes.editButton} onClick={props.editBtn}>Edit</Button>
        </div>
    );
}


export default Table1;






// import React, {useState, useEffect} from 'react';
// import { DataGrid } from '@material-ui/data-grid';

// var rows1 =[]



// const Tabel = (props) => {
//     const columns = [
//         { field: 'id',width: 100, headerName: 'ID' },
//         {
//           field: 'firstName',
//           headerName: 'First name',
//           width: 150,
//           editable: true,
//         },
//         {
//           field: 'lastName',
//           headerName: 'Last name',
//           width: 150,
//           editable: true,
//         },
//         {
//           field: 'gender',
//           headerName: 'Gender',
//           width: 130,
//           editable: true,
//         },
//         {
//           field: 'email',
//           headerName: 'Email',
//           sortable: false,
//           width: 160,
//         },
//         {
//           field: 'image',
//           headerName:'Pic',
//           sortable: false,
//           width: 260,

//         }
//       ];





//       const [tableData, setTableData] = useState([]);



//         // setTableData(rows1);
//         // var image1 = new Image();
//         // image1.src = props.images;

//       //   var img = canvas.toDataURL("image");
//       //  var item_image = img.replace(/^data:image\/(png|jpg);base64,/, "") ; 
//       //   var src = props.images;
//       //   src += item_image;
//       //   var newImage = document.createElement('img');
//       //   newImage.src = src;
//       //   newImage.width = newImage.height = "80";
//       //   document.querySelector('#imageContainer').innerHTML = newImage.outerHTML;



//         // var getLocalStorage = localStorage.getItem("User Data");
//         // getLocalStorage==null? rows1 =[] : rows1 = JSON.parse(getLocalStorage);


//         // document.body.appendChild(image1);
//         var profile = new Image();
//         profile.src = props.images;
//         document.body.appendChild(profile);

//         const rows1 =[{ id: 1, lastName: 'Snow', firstName: 'Jon', gender: 35, email: 'asd@asd', image: profile },];


//       // const rows = {displayUsers};


//       return (
//         <div style={{ height: 400, width: '100%' }}>
//           <DataGrid
//             rows={rows1}
//             columns={columns}
//             pageSize={6}
//             checkboxSelection
//             disableSelectionOnClick
//           />
//         </div>
//       );
// }

