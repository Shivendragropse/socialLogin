import React, {Component} from 'react';
import { OldSocialLogin as SocialLogin } from 'react-social-login'


class Github extends Component {
    state = {
        isLoggedIn : false,
        id : '',
        name : '',
        email : '',
        // profilePicURL : ''
    }

    handleSocialLogin = (user, err) =>{
        console.log('rrrrrrrrrrrrrrrrr',user);
        
        // this.setState({
        //     isLoggedIn: true,
        //     id : user._profile.id,
        //     name : user._profile.name,
        //     email : user._profile.email,
        //     // profilePicURL : user._profile.profilePicURL
        // })
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
            fbContent = (<SocialLogin
                provider='github'
                appId='65bdd7cdfa8183d22f45'
                callback={this.handleSocialLogin}
              >
                <button>Login with Github</button>
              </SocialLogin>)
        }
        return(
            <div>{fbContent}</div>
        )
    }
}

export default Github;