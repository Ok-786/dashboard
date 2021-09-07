import React, { Component } from 'react';
import View from '../views/Dashboard';

class Dashboard extends Component {
    state = {
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
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

    deleteBtn = (event) => {
        var rows = [];
        var elm = document.getElementById("checkBox");
        var getLocalStorage = localStorage.getItem("User Data");
        getLocalStorage == null ? rows = [] : rows = JSON.parse(getLocalStorage);

        if (elm.checked === true) {
            localStorage.removeItem("User Data");
            this.setId();
        }
        else {
            var elements = this.state.isChecked;
            for (var i = 0; i < rows.length; i++) {
                for (var j = 0; j < elements.length; j++) {
                    if (Number(elements[j]) === Number(rows[i].id)) {
                        rows.splice(i, 1);
                    }
                }
            }

            if (rows.length === 0) {
                localStorage.removeItem("User Data");
            }
            else {
                localStorage.setItem("User Data", JSON.stringify(rows));
            }
        }



        elm.checked = false;
        this.updateLocalStorageState();
    }

    editBtn = () => {
        if (this.state.isChecked.length === 1) {
            var fn = document.getElementById(`fn${this.state.isChecked[0]}`);
            var sn = document.getElementById(`ln${this.state.isChecked[0]}`);
            var e = document.getElementById(`e${this.state.isChecked[0]}`);
            var g = document.getElementById(`g${this.state.isChecked[0]}`);
            var img = document.getElementById(`img${this.state.isChecked[0]}`);
            this.setState({
                firstName: fn.innerText,
                lastName: sn.innerText,
                email: e.innerText,
                gender: g.innerText,
                imageURL: img.src
            })

            // var data = [];
            var data = JSON.parse(localStorage.getItem("User Data"));

            data.forEach((element, id) => {
                if (Number(element.id) === Number(this.state.isChecked[0])) {
                    this.setState({ edit: true });
                }
            })

            localStorage.setItem("User Data", JSON.stringify(data));

        }

    }

    updateLocalStorageState = () => {
        var rows = [];
        var getLocalStorage = localStorage.getItem("User Data");
        getLocalStorage == null ? rows = [] : rows.push(JSON.parse(getLocalStorage));

        this.setState({ localeStorageData: rows });

    }

    componentDidMount() {
        this.updateLocalStorageState();

        var value = null;
        var newId = [];
        var storage = localStorage.getItem("User Data");
        if (storage != null) {
            newId = JSON.parse(storage);
            value = newId[(newId.length - 1)].id;
            this.setState({ id: value });
        }
    }

    setFirstName = (e) => {
        this.setState({ firstName: e.target.value })
        // // this.setState({values: value});
    };
    setLastName = (e) => {
        this.setState({ lastName: e.target.value })
    };
    setEmail = (e) => {
        this.setState({ email: e.target.value })
    };
    setGender = (e) => {
        this.setState({ gender: e.target.value })
    }
    setId = () => {
        var storage = localStorage.getItem("User Data");

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
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            gender: this.state.gender,
            imageURL: this.state.imageURL
        }

        var getLocalStorage = localStorage.getItem("User Data");
        getLocalStorage == null ? arrEntry = [] : arrEntry = JSON.parse(getLocalStorage)
        arrEntry.push(data);

        localStorage.setItem("User Data", JSON.stringify(arrEntry));
        this.updateLocalStorageState();
    };

    submitFun = (e) => {
        e.preventDefault();
        if (this.state.edit === true) {
            var newValue = {
                id: this.state.id,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                gender: this.state.gender,
                imageURL: this.state.imageURL
            }

            var data = JSON.parse(localStorage.getItem("User Data"));
            data.forEach((element, id) => {
                if (Number(element.id) === Number(this.state.isChecked[0])) {
                    data.splice(id, 1, newValue);
                    this.setState({
                        edit: false,
                        isChecked: []
                    });

                }
            })



            localStorage.setItem("User Data", JSON.stringify(data));
        }

        else {
            this.updateLocalStorage();
        }
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            imageURL: '',
        })
    }

    render() {
        return (
            <View id={this.state.id} firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} gender={this.state.gender} setFirstName={this.setFirstName} setLastName={this.setLastName} setEmail={this.setEmail} setGender={this.setGender} encodeImageFileAsURL={this.encodeImageFileAsURL} submitFun={this.submitFun} setId={this.setId} localeStorageData={this.state.localeStorageData} updateLocalStorageState={this.updateLocalStorageState} editBtn={this.editBtn} setChecked={this.setChecked} deleteBtn={this.deleteBtn} />
        );
    }
}

export default Dashboard;
