import React, {Component} from 'react';
import InstagramLogin from 'react-instagram-login';

class Instagram extends Component {
    state = {
        isLoggedIn : false,
        id : '',
        name : '',
        email : '',
        // profilePicURL : ''
    }

    // handleSocialLogin = (user, err) =>{
    //     console.log('rrrrrrrrrrrrrrrrr',user._profile);
        
    //     this.setState({
    //         isLoggedIn: true,
    //         id : user._profile.id,
    //         name : user._profile.name,
    //         email : user._profile.email,
    //         // profilePicURL : user._profile.profilePicURL
    //     })
    // }


     responseInstagram = (response) => {
        console.log(response);
      }

    render(){
        console.log('iiiiiiiiiiiiiiii',this.state);
        let fbContent;

        if(this.state.isLoggedIn){
            fbContent = (
                <div style = {{
                    width : '400px',
                    margin: 'auto',
                    background : '#f4f4f4',
                    padding: '20px'
                }}>
                    {/* <img src = {this.state.profilePicURL} alt = {this.state.name} />
                    <h2>Welcome {this.state.name}</h2>
                    Email: {this.state.email} */}
                </div>
            ); 
        }else{
            fbContent = (<InstagramLogin
                clientId="1576484e7b49422aa865bfcb68483abc"
                buttonText="Login"
                onSuccess={this.responseInstagram}
                onFailure={this.responseInstagram}
              />)
        }

        // <FacebookLogin
        //         appId="2332369863758373"
        //         autoLoad={true}
        //         fields="name,email,picture"
        //         onClick={this.componentClicked}
        //         callback={this.responseFacebook} />
        return(
            <div>{fbContent}</div>
        )
    }
}

export default Instagram;