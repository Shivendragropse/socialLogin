import React,{Component} from 'react';
// import GoogleLogin from 'react-google-login';
import { OldSocialLogin as SocialLogin } from 'react-social-login'


class Google extends Component {

    state = {
        isLoggedIn : false,
        id : '',
        name: '',
        email: '',
    }

    handleSocialLogin = (user, err) =>{
        console.log('rrrrrrrrrrrrrrrrr',user._profile);
        
        this.setState({
            isLoggedIn: true,
            id : user._profile.id,
            email : user._profile.email,
            name : user._profile.name
        })
    }


    render (){
        console.log('tttttttttt',this.state);
        let googleContent;

        if(this.state.isLoggedIn){
            googleContent = (
                <div>
                    <h2>Welcome {this.state.name}</h2>
                    Email : {this.state.email}
                </div>
            );
        }else{
            googleContent = (<SocialLogin
                  provider='google'
                  appId='100972876109-i58mg7qr69tpk3hvcpgdlj7vj4addr3v.apps.googleusercontent.com'
                  callback={this.handleSocialLogin}
                >
                  <button>Login with Google</button>
                </SocialLogin>
          );
        }

        return(
            <div>
                {googleContent}
            </div>
        )
    }
}

export default Google;