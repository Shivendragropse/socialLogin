import React, {Component} from 'react';
// import FacebookLogin from 'react-facebook-login';
import { OldSocialLogin as SocialLogin } from 'react-social-login'

class Facebook extends Component {
    state = {
        isLoggedIn : false,
        id : '',
        name : '',
        email : '',
        profilePicURL : ''
    }

    handleSocialLogin = (user, err) =>{
        console.log('rrrrrrrrrrrrrrrrr',user._profile);
        
        this.setState({
            isLoggedIn: true,
            id : user._profile.id,
            name : user._profile.name,
            email : user._profile.email,
            profilePicURL : user._profile.profilePicURL
        })
    }


    render(){
        console.log('ttttttttttttttt',this.state);
        let fbContent;

        if(this.state.isLoggedIn){
            fbContent = (
                <div style = {{
                    width : '400px',
                    margin: 'auto',
                    background : '#f4f4f4',
                    padding: '20px'
                }}>
                    <img src = {this.state.profilePicURL} alt = {this.state.name} />
                    <h2>Welcome {this.state.name}</h2>
                    Email: {this.state.email}
                </div>
            ); 
        }else{
            fbContent = (<SocialLogin
                provider='facebook'
                appId='2332369863758373'
                callback={this.handleSocialLogin}
              >
                <button>Login with Facebook</button>
              </SocialLogin>)
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

export default Facebook;