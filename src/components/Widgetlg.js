import React, { Component } from 'react';
import View from '../views/Widgetlg';

var tempId;

class widgetlg extends Component {
    state = {
        id: 0,
        productName: '',
        productType: '',
        productQuantity: '',
        price: '',
        imageURL: '',
        localeStorageData: [],
        isChecked: [],
        edit: false,
    };
    
    setChecked = (e) => {
        var id = e.target.id;
        var arr = [];
        if (e.target.checked) {
            arr = this.state.isChecked;
            arr.push(id);
            this.setState({ isChecked: arr });
        }
        else {
            arr = this.state.isChecked;
            arr.forEach((element, i) => {
                if (element === id) {
                    arr.splice(i, 1);

                }
            })

            this.setState({ isChecked: arr })
        }
    }
    
    

    updateLocalStorageState = () => {
        var rows = [];
        var getLocalStorage = localStorage.getItem("Product Data");
        getLocalStorage == null ? rows = [] : rows.push(JSON.parse(getLocalStorage));

        this.setState({ localeStorageData: rows });

    }

    componentDidMount() {
        this.updateLocalStorageState();

        var value = null;
        var newId = [];
        var storage = localStorage.getItem("Product Data");
        if (storage != null) {
            newId = JSON.parse(storage);
            value = newId[(newId.length - 1)].id;
            this.setState({ id: value });
        }
    }

    setproductName = (e) => {
        this.setState({ productName: e.target.value })
    };
    setproductType = (e) => {
        this.setState({ productType: e.target.value })
    };
    setproductQuantity = (e) => {
        this.setState({ productQuantity: e.target.value })
    };
    setPrice = (e) => {
        this.setState({ price: e.target.value })
    }
    setId = () => {
        var storage = localStorage.getItem("Product Data");

        if (storage == null) {
            this.setState({ id: 0 });
        }
        else {
            var a = this.state.id + 1;
            this.setState({ id: (a) })
        }
    }

    encodeImageFileAsURL = (event) => {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onloadend = () => {
            this.setState({ imageURL: reader.result })
        }
        reader.readAsDataURL(file);

    }

    updateLocalStorage = () => {
        var arrEntry = [];
        var data = {
            id: this.state.id,
            productName: this.state.productName,
            productType: this.state.productType,
            productQuantity: this.state.productQuantity,
            price: this.state.price,
            imageURL: this.state.imageURL
        }

        var getLocalStorage = localStorage.getItem("Product Data");
        getLocalStorage == null ? arrEntry = [] : arrEntry = JSON.parse(getLocalStorage)
        arrEntry.push(data);

        localStorage.setItem("Product Data", JSON.stringify(arrEntry));
        this.updateLocalStorageState();
    };

    

    toggleBtn() {
        var elm = document.getElementById("checkBox1");
        var data = JSON.parse(localStorage.getItem("Product Data"));
        data.forEach=(element, index)=> {
            var e1=document.getElementById(`cb${element.id}`);
            if (elm.checked === true) {
                e1.setAttribute('checked', 'checked');
                elm.removeAttribute('checked');
            }
            else {
                e1.removeAttribute('checked');
                elm.setAttribute('checked', 'checked');
            }
        }
    }

    deleteBtn() {
        localStorage.removeItem("Admin Data");
    }

    
    render(props) {
        const submitFun = (e) => {
            e.preventDefault();
            var data;
            if (this.state.edit === true) {
                var newValue = {
                    id: this.state.id,
                    productName: this.state.productName,
                    productQuantity: this.state.productQuantity,
                    price: this.state.price,
                }
                data = JSON.parse(localStorage.getItem("Product Data"));
                data.splice(tempId, 1, newValue);
                this.setState({
                    edit: false,
                });
                
                localStorage.setItem("Product Data", JSON.stringify(data));
            }else {
                this.updateLocalStorage();
            }
            this.setState({
                productName: '',
                productType: '',
                productQuantity: '',
                price: '',
                imageURL: '',
            })
            var total=0;
            data = JSON.parse(localStorage.getItem("Product Data"));
            if(data!=null){
                var arr=[];
                arr = data;
                console.log("asd:"+ data[0].price)    
                arr.forEach(element => {
                    console.log("asdasdsd:"+ element.price)
                    total=total+Number(element.price);
                })
                console.log(data.length)
                this.props.changeCount(data.length)
            }else {this.props.changeCount(0)}
            
            this.props.changeAmount(total)
        }
        
        const deleteTask=(index)=> {
            console.log(index)
            var getLocalStorage = localStorage.getItem("Product Data");
            var arrEntry = JSON.parse(getLocalStorage);
            arrEntry.splice(index,1);
            if(Number(arrEntry)===Number([])) {
                localStorage.removeItem("Product Data")
            }else {
                localStorage.setItem("Product Data", JSON.stringify(arrEntry));
            }
    
            var data=JSON.parse(localStorage.getItem("Product Data"));
            var total=0;

            if(data!=null){
                var arr=[];
                arr = data;
                console.log("asd:"+ data[0].price)    
                arr.forEach(element => {
                    console.log("asdasdsd:"+ element.price)
                    total=total+Number(element.price);
                })
                
                this.props.changeCount(data.length)
            }else {this.props.changeCount(0)}
            
            this.props.changeAmount(total)

            this.updateLocalStorageState();
        }
    
        const editTask=(index)=> {
            var getLocalStorage = localStorage.getItem("Product Data");
            var arrEntry= JSON.parse(getLocalStorage);
            this.setState({
                productName: arrEntry[index].productName,
                productQuantity: arrEntry[index].productQuantity,
                price: arrEntry[index].price,
                edit:true
            })
            tempId=index;
            var data=JSON.parse(localStorage.getItem("Product Data"));
            var total=0;
            if(data!=null){
                var arr=[];
                arr = data;
                console.log("asd:"+ data[0].price)    
                arr.forEach(element => {
                    console.log("asdasdsd:"+ element.price)
                    total=total+Number(element.price);
                })
                
                this.props.changeCount(data.length)
            }else {this.props.changeCount(0)}
            
            this.props.changeAmount(total)
        }
        
        return (
            <View price={this.state.price} productName={this.state.productName} productQuantity={this.state.productQuantity} setProductName={this.setproductName} setProductQuantity={this.setproductQuantity} setPrice={this.setPrice} submitFun={submitFun} setChecked={this.setChecked} toggle={this.toggleBtn} deleteTask={deleteTask} editTask={editTask} setId={this.setId} updateLocalStorageState={this.updateLocalStorageState} deleteBtn={this.deleteBtn}/>
        );
    }
}

export default widgetlg;
