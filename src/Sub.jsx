import React from "react";
class Sub extends React.Component{
    constructor(){
        super();
        this.state={
            user:"",
            password:"",
            userError:"",
            passwordError:""
        }
    }
    fun(){
        if(this.state.user=="" && this.state.password==""){
            this.setState({userError:"please fill user input",passwordError:"please fill password"})
        }
        else if(this.state.user==""){
            this.setState({userError:"please fill the input"})
        }
        else if(this.state.password==""){
            this.setState({passwordError:"please fill password"})
        }
       
        else{
            return true;
        }
    }
    submit(){
        if(this.fun())
        {
            alert("congsulation your form is sucessfully submited")
        }
    }
    render(){
        return(
            <>
            <center><h1>school registration form</h1></center>
            <input type="text" name="user" onChange={(e)=>{
                this.setState({user:e.target.value})
            }}/>
            <p style={{color:"red"}}>{this.state.userError}</p>
            <input type="password" name="password" onChange={(e)=>{
                this.setState({password:e.target.value})
            }}/>
            <p style={{color:"red"}}>{this.state.passwordError}</p>
            <button onClick={()=>{this.submit()}}>submit</button>
            </>
        );
    }
}
export default Sub;